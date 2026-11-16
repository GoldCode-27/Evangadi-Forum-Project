import express from 'express';
const questionRouter = express.Router();

questionRouter.post('/questions');

export default questionRouter;