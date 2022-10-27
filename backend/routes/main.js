import authRoutes from './auth.js'

import express from 'express'
const router = express.Router();
router.use('/api/v1/auth',authRoutes);

export default router;