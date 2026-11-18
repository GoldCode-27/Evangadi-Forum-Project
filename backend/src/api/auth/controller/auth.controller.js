

import {loginService} from '../service/auth.service.js';
// import { statusCode } from '../../../utils/status-code.js';


export const loginController = async (req, res, next) => {
    try {
    const { email, password } = req.body;
    
    const authResult = await loginService(email, password);
    res.status(statusCode.OK).json({ 
        status: 'success',
        message: 'User authenticated successfully',
        user: authResult.user,
        data: authResult.token,

    });
    } catch (error) {
        next(error);
    }
}