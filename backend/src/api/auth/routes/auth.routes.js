import express from 'express';
const authRouter = express.Router();
import { loginController } from '../controller/auth.controller.js';
/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
// authRouter.post('/register', registerController);
    
/**
 * @route POST /api/auth/login
 * @desc Authenticate user and get token
 * @access Public
 */
authRouter.post('/login', loginController);

export default authRouter;