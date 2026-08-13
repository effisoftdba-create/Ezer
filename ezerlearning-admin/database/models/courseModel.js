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

export function getAllCourses() {
  return readJson(DB_PATHS.COURSES_FILE, []);
}

export function getCourseById(courseId) {
  const courses = getAllCourses();
  return courses.find(c => c.id === courseId || c.slug === courseId);
}

export default {
  getAllCourses,
  getCourseById
};
