import express from 'express'
import { loginController, mainHome, registerController } from '../controller/auth.js';
import { checkLogin } from '../middelware/checkLogin.js';

const router = express.Router();

router.get('/home', checkLogin, mainHome);
router.post('/register',registerController);
router.post('/login', loginController);

export default router;