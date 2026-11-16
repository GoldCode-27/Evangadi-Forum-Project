import express from 'express';
import authRoutes from './auth/routes/auth.routes.js';
import questionRoutes from './question/route/question-route.js';
export const mainRouter = express.Router();

// /api/auth ...auth routes
mainRouter.use('/auth', authRoutes);

// /api/questions ...question routes
mainRouter.use('/questions', questionRoutes);

export default mainRouter;