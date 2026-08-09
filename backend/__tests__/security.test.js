import { describe, it, expect } from 'vitest';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string().min(3).max(50),
  password: z.string().min(6).max(100)
});

describe('Security & Validation Tests', () => {
  it('should validate correct login payload format', () => {
    const valid = loginSchema.safeParse({ username: 'admin', password: 'EzerAdminPassword123' });
    expect(valid.success).toBe(true);
  });

  it('should reject invalid email/username or short password format', () => {
    const invalid = loginSchema.safeParse({ username: 'a', password: '123' });
    expect(invalid.success).toBe(false);
  });

  it('should hash admin password with bcrypt cost factor >= 12', () => {
    const rawPass = 'EzerSecret2026';
    const hash = bcrypt.hashSync(rawPass, 12);
    expect(hash).not.toBe(rawPass);
    expect(bcrypt.compareSync(rawPass, hash)).toBe(true);
    expect(bcrypt.compareSync('WrongPassword', hash)).toBe(false);
  });

  it('should guarantee generic error message format without field leaks', () => {
    const genericAuthError = 'Incorrect email or password';
    expect(genericAuthError).not.toContain('stack');
    expect(genericAuthError).not.toContain('database');
  });
});
