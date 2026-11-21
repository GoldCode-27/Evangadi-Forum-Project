import express from 'express';
import {
  loginController,
} from '../controller/auth.controller.js';
import {
  loginValidation,
} from '../validations/auth.validation.js';

const router = express.Router();

/**
 * @route POST /api/auth/login
 * @desc Authenticate user and get token
 * @access Public
 */
router.post('/login', loginValidation, loginController);

export default router;
