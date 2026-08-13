import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const DB_PATHS = {
  DATA_DIR: path.join(__dirname, '..', 'data'),
  COURSES_FILE: path.join(__dirname, '..', 'data', 'courses.json'),
  PAYMENTS_FILE: path.join(__dirname, '..', 'data', 'payments.json'),
  USERS_FILE: path.join(__dirname, '..', 'data', 'users.json'),
  LEADS_FILE: path.join(__dirname, '..', 'data', 'leads.json')
};

export default {
  DB_PATHS
};
