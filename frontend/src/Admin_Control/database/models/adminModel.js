import fs from 'fs';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { DB_PATHS } from '../config/dbConfig.js';

function readJson(filePath, defaultValue = []) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err);
  }
  return defaultValue;
}

function writeJson(filePath, data) {
  try {
    const dir = DB_PATHS.DATA_DIR;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err);
  }
}

// Ensure default Admin user exists
export function initializeAdminUser() {
  const adminPass = process.env.ADMIN_PASSWORD || crypto.randomBytes(16).toString('hex');
  const defaultAdminPasswordHash = bcrypt.hashSync(adminPass, 12);
  let users = readJson(DB_PATHS.USERS_FILE, []);
  
  if (!users.some(u => u.username === 'admin')) {
    users.push({
      username: 'admin',
      passwordHash: defaultAdminPasswordHash,
      role: 'admin',
      createdAt: new Date().toISOString()
    });
    writeJson(DB_PATHS.USERS_FILE, users);
  }
  return users;
}

export function findUserByUsername(username) {
  const users = readJson(DB_PATHS.USERS_FILE, []);
  return users.find(u => u.username === username);
}

export async function verifyUserPassword(password, passwordHash) {
  return await bcrypt.compare(password, passwordHash);
}

export default {
  initializeAdminUser,
  findUserByUsername,
  verifyUserPassword
};
