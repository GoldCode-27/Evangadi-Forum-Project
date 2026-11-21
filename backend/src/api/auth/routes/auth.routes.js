import express from 'express';

import {
  registerController,
} from '../controller/auth.controller.js';
import {
  registerValidation,
} from '../validations/auth.validation.js';

const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',  registerValidation, registerController);

export default authRouter;