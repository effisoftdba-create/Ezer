import fs from 'fs';
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

export function getAllPayments() {
  return readJson(DB_PATHS.PAYMENTS_FILE, []);
}

export function recordPayment(paymentData) {
  const payments = getAllPayments();
  payments.push(paymentData);
  writeJson(DB_PATHS.PAYMENTS_FILE, payments);
  return paymentData;
}

export default {
  getAllPayments,
  recordPayment
};
