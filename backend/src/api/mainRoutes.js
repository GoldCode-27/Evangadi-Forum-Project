import express from 'express';
import authRoutes from './auth/routes/auth.routes.js';

export const mainRouter = express.Router();

// /api/auth ...auth routes
mainRouter.use('/auth', authRoutes);


export default mainRouter;
