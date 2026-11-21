import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { safeExecute } from '../../../../db/config.js';
import {
  BadRequestError,
  UnauthenticatedError,
} from '../../../utils/errors/index.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

// if (!JWT_SECRET) {
//   throw new Error('JWT_SECRET environment variable is required');
// }

const normalizeEmail = email => email.trim().toLowerCase();

/**
 * Checks if a user exists by email.
 *
 * @param {string} email - The email to check.
 * @returns {Promise<boolean>} True if the user exists, false otherwise.
 */
export const checkUserExists = async email => {
  const normalizedEmail = normalizeEmail(email);
  const sql = 'SELECT user_id FROM users WHERE email = ? LIMIT 1';
  const rows = await safeExecute(sql, [normalizedEmail]);
  return rows.length > 0;
};


//login service
export const loginService = async (email, password) => {
    
    const normalizedEmail = normalizeEmail(email);
    const sql = `
  SELECT user_id, first_name, last_name, email, password_hash
  FROM users
  WHERE email = ?
  LIMIT 1
`;

    const rows = await safeExecute(sql, [normalizedEmail]);

    if (rows.length === 0) {
        throw new UnauthenticatedError('Invalid email or password');
    }

    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
        throw new UnauthenticatedError('Invalid email or password');
    }

    const playload = {
        id: user.user_id,
        firstName: user.first_name,
        lastName: user.last_name,

    };

    const token = jwt.sign(playload, process.env.JWT_SECRET, { expiresIn: '1h' });

    const safeUser = {
    id: user.user_id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
  };

    return {
        user: safeUser,
        token
    };
};