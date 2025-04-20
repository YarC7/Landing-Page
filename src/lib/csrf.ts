import { randomBytes } from 'crypto';

export function generateCSRFToken() {
  return randomBytes(32).toString('hex');
}

export function verifyCSRFToken(token: string, csrfToken: string) {
  return token === csrfToken;
} 