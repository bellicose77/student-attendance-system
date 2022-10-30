import authRoutes from './auth.js'
import userRoutes from './user.js'

import express from 'express'
import { checkLogin } from '../middelware/checkLogin.js';
const router = express.Router();
router.use('/api/v1/auth',authRoutes);
router.use('/api/v1/users', checkLogin, userRoutes);

export default router;