const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_DURATION_MS = 15 * 60 * 1000;
const STORAGE_LOCK_KEY = 'ezer_auth_lockout';
const STORAGE_ATTEMPTS_KEY = 'ezer_auth_attempts';
const SESSION_TOKEN_KEY = 'ezer_admin_session';

const ADMIN_EMAIL = 'admin@ezer.com';
// SHA-256 hash of 'Admin@123456'
const ADMIN_PASS_HASH = 'ad89b64d66caa8e30e5d5ce4a9763f4ecc205814c412175f3e2c50027471426d';

async function hashPassword(password) {
  const msgBuffer = new TextEncoder().encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
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
    errors.push('Invalid input format');
  }

  if (!cleanPassword || cleanPassword.length < 6) {
    errors.push('Invalid input format');
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

export async function authenticateAdmin(email, password) {
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
    return { success: false, error: 'Incorrect email or password' };
  }

  const currentAttempts = parseInt(localStorage.getItem(STORAGE_ATTEMPTS_KEY) || '0', 10);
  if (currentAttempts > 0) {
    const delayMs = Math.min(Math.pow(2, currentAttempts) * 300, 3000);
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  const inputHash = await hashPassword(cleanPassword);
  const emailMatch = cleanEmail.toLowerCase() === ADMIN_EMAIL.toLowerCase();
  const passwordMatch = inputHash === ADMIN_PASS_HASH || cleanPassword === 'Admin@123456';

  if (emailMatch && passwordMatch) {
    localStorage.removeItem(STORAGE_ATTEMPTS_KEY);
    localStorage.removeItem(STORAGE_LOCK_KEY);

    const randomArray = new Uint8Array(16);
    crypto.getRandomValues(randomArray);
    const randomHex = Array.from(randomArray, (b) => b.toString(16).padStart(2, '0')).join('');
    const token = `ezer_token_${Date.now()}_${randomHex}`;
    sessionStorage.setItem(SESSION_TOKEN_KEY, token);

    return { success: true, token };
  } else {
    recordFailedAttempt();
    return { success: false, error: 'Incorrect email or password' };
  }
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

export function logoutAdmin() {
  try {
    sessionStorage.removeItem(SESSION_TOKEN_KEY);
  } catch (e) {
    console.error('Error logging out:', e);
  }
}
