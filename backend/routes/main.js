import authRoutes from './auth.js'
import userRoutes from './user.js'

import express from 'express'
const router = express.Router();
router.use('/api/v1/auth',authRoutes);
router.use('/api/v1/users',userRoutes);

export default router;