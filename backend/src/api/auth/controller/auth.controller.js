
import { StatusCodes } from 'http-status-codes';
import { loginService } from '../service/auth.service.js';

export const loginController = async (req, res, next) => {
    try {
    const { email, password } = req.body;
    
    const authResult = await loginService(email, password);
    res.status(StatusCodes.OK).json({ 
        status: 'success',
        message: 'User authenticated successfully',
        user: authResult.user,
        token: authResult.token,

    });
    } catch (error) {
        next(error);
    }
}