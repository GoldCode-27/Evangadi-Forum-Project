import express from 'express';
import {loginController} from '../controller/auth.controller.js';
import {loginValidation} from '../validations/auth.validation.js';
import {registerController} from '../controller/auth.controller.js';
import {registerValidation} from '../validations/auth.validation.js';
const authRouter = express.Router();

/**
 * @route POST /api/auth/login
 * @desc Authenticate user and get token
 * @access Public
 */
authRouter.post('/login', loginValidation, loginController);

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register',  registerValidation, registerController);

export default authRouter;
