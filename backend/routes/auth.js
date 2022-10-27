import express from 'express'
import { mainHome, registerController } from '../controller/auth.js';

const router = express.Router();

//router.get('/',mainHome);
router.post('/register',registerController);
router.post('/login');

export default router;