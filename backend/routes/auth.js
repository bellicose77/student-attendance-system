import express from 'express'
import { mainHome } from '../controller/auth.js';

const router = express.Router();

router.get('/',mainHome);

export default router;