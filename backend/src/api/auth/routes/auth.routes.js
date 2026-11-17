import express from 'express';

import {
  registerController,
} from '../controller/auth.controller.js';
import {
  registerValidation,
} from '../validation/auth.validation.js';

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',  registerValidation, registerController);
    
/**
 * @route POST /api/auth/login
 * @desc Authenticate user and get token
 * @access Public
 */
authRouter.post('/login');

export default authRouter;