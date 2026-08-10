import crypto from 'crypto';
import { z } from 'zod';
import { findUserByUsername, verifyUserPassword } from '../../database/models/adminModel.js';

const loginSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(100)
});

export async function adminLogin(req, res) {
  try {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({ success: false, error: 'Incorrect email or password' });
    }

    const { username, password } = parseResult.data;
    const user = findUserByUsername(username);

    if (!user) {
      return res.status(401).json({ success: false, error: 'Incorrect email or password' });
    }

    const match = await verifyUserPassword(password, user.passwordHash);
    if (!match) {
      return res.status(401).json({ success: false, error: 'Incorrect email or password' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    return res.json({ success: true, token, username: user.username });
  } catch (err) {
    console.error('Admin Login Error:', err);
    return res.status(500).json({ success: false, error: 'Incorrect email or password' });
  }
}

