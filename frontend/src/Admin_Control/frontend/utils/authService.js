const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000;
const STORAGE_LOCK_KEY = 'ezer_auth_lockout';
const STORAGE_ATTEMPTS_KEY = 'ezer_auth_attempts';
const SESSION_TOKEN_KEY = 'ezer_admin_session';
const SESSION_USER_KEY = 'ezer_admin_user';

const SUPER_ADMIN_EMAIL = 'effisoftdba@gmail.com';
const SUPER_ADMIN_PASS = 'dba@effisoft$123';
// SHA-256 hash of 'dba@effisoft$123'
const SUPER_ADMIN_PASS_HASH = 'c0282bf83fbc3f679782ea255e2d1d36bb9cf7ed2c0c707577edb7d34199f1bc';

async function hashPassword(password) {
  try {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  } catch (e) {
    return password;
  }
}

export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

export function validateLoginSchema(email, password) {
  const errors = [];
  const cleanEmail = sanitizeInput(email);
  const cleanPassword = typeof password === 'string' ? password.trim() : '';

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail)) {
    errors.push('Invalid email format');
  }

  if (!cleanPassword || cleanPassword.length < 4) {
    errors.push('Invalid password format');
  }

  return { isValid: errors.length === 0, cleanEmail, cleanPassword };
}

export function getLockoutState() {
  try {
    const lockTime = localStorage.getItem(STORAGE_LOCK_KEY);
    const attempts = parseInt(localStorage.getItem(STORAGE_ATTEMPTS_KEY) || '0', 10);

    if (lockTime) {
      const remainingMs = parseInt(lockTime, 10) - Date.now();
      if (remainingMs > 0) {
        const remainingMinutes = Math.ceil(remainingMs / (60 * 1000));
        return { isLocked: true, remainingMinutes, attempts };
      } else {
        localStorage.removeItem(STORAGE_LOCK_KEY);
        localStorage.removeItem(STORAGE_ATTEMPTS_KEY);
      }
    }

    return { isLocked: false, remainingMinutes: 0, attempts };
  } catch (err) {
    return { isLocked: false, remainingMinutes: 0, attempts: 0 };
  }
}

export async function authenticateAdmin(email, password, customUsers = []) {
  const lockState = getLockoutState();
  if (lockState.isLocked) {
    return {
      success: false,
      error: `Too many failed attempts. Account locked. Please try again in ${lockState.remainingMinutes} minute(s).`,
      isLocked: true,
    };
  }

  const { isValid, cleanEmail, cleanPassword } = validateLoginSchema(email, password);
  if (!isValid) {
    recordFailedAttempt();
    return { success: false, error: 'Incorrect email ID or password' };
  }

  const currentAttempts = parseInt(localStorage.getItem(STORAGE_ATTEMPTS_KEY) || '0', 10);
  if (currentAttempts > 0) {
    const delayMs = Math.min(Math.pow(2, currentAttempts) * 300, 3000);
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  const inputHash = await hashPassword(cleanPassword);
  
  // 1. Super Admin Verification
  const isSuperEmail = cleanEmail.toLowerCase() === SUPER_ADMIN_EMAIL.toLowerCase();
  const isSuperPass = cleanPassword === SUPER_ADMIN_PASS || inputHash === SUPER_ADMIN_PASS_HASH;

  if (isSuperEmail && isSuperPass) {
    localStorage.removeItem(STORAGE_ATTEMPTS_KEY);
    localStorage.removeItem(STORAGE_LOCK_KEY);

    const randomArray = new Uint8Array(16);
    crypto.getRandomValues(randomArray);
    const randomHex = Array.from(randomArray, (b) => b.toString(16).padStart(2, '0')).join('');
    const token = `ezer_token_${Date.now()}_${randomHex}`;
    
    const superUser = {
      id: 'super-admin-01',
      email: SUPER_ADMIN_EMAIL,
      name: 'Effisoft Super Admin',
      role: 'SUPER_ADMIN',
      allowedTabs: '*', // Full unrestricted access
      status: 'ACTIVE'
    };

    sessionStorage.setItem(SESSION_TOKEN_KEY, token);
    sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(superUser));

    return { success: true, token, user: superUser };
  }

  // 2. Custom Sub-Admin Verification
  const userList = Array.isArray(customUsers) ? customUsers : [];
  const foundUser = userList.find(
    (u) => (u.email || '').trim().toLowerCase() === cleanEmail.toLowerCase()
  );

  if (foundUser) {
    if (foundUser.status === 'DISABLED') {
      return { success: false, error: 'Account disabled. Please contact the Super Admin.' };
    }

    const passMatches = foundUser.password === cleanPassword;
    if (passMatches) {
      localStorage.removeItem(STORAGE_ATTEMPTS_KEY);
      localStorage.removeItem(STORAGE_LOCK_KEY);

      const randomArray = new Uint8Array(16);
      crypto.getRandomValues(randomArray);
      const randomHex = Array.from(randomArray, (b) => b.toString(16).padStart(2, '0')).join('');
      const token = `ezer_token_${Date.now()}_${randomHex}`;

      const sessionUser = {
        id: foundUser.id || `user-${Date.now()}`,
        email: foundUser.email,
        name: foundUser.name || foundUser.email.split('@')[0],
        role: foundUser.role || 'SUB_ADMIN',
        allowedTabs: Array.isArray(foundUser.allowedTabs) ? foundUser.allowedTabs : [],
        status: foundUser.status || 'ACTIVE'
      };

      sessionStorage.setItem(SESSION_TOKEN_KEY, token);
      sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(sessionUser));

      return { success: true, token, user: sessionUser };
    }
  }

  recordFailedAttempt();
  return { success: false, error: 'Incorrect email ID or password' };
}

function recordFailedAttempt() {
  try {
    const current = parseInt(localStorage.getItem(STORAGE_ATTEMPTS_KEY) || '0', 10) + 1;
    localStorage.setItem(STORAGE_ATTEMPTS_KEY, current.toString());

    if (current >= MAX_FAILED_ATTEMPTS) {
      const lockUntil = Date.now() + LOCKOUT_DURATION_MS;
      localStorage.setItem(STORAGE_LOCK_KEY, lockUntil.toString());
    }
  } catch (err) {
    console.error('Error updating auth attempt state:', err);
  }
}

export function isAuthenticated() {
  try {
    const token = sessionStorage.getItem(SESSION_TOKEN_KEY);
    return Boolean(token && token.startsWith('ezer_token_'));
  } catch (e) {
    return false;
  }
}

export function getCurrentAdminUser() {
  try {
    const raw = sessionStorage.getItem(SESSION_USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export function logoutAdmin() {
  try {
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
    sessionStorage.removeItem(SESSION_USER_KEY);
  } catch (e) {
    console.error('Error logging out:', e);
  }
}
