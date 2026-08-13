import { onRequest } from "firebase-functions/v2/https";
import app from "./server.js";

// Firebase Cloud Function entry point
export const api = onRequest({ cors: true }, app);
