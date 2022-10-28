import express from 'express'
import { loginController, mainHome, registerController } from '../controller/auth.js';

const router = express.Router();

router.get('/',mainHome);
router.post('/register',registerController);
router.post('/login', loginController);

export default router;