import express from 'express'
import { getUserController } from '../controller/user';

const router = express.Router();

router.get('/',getUserController);

export default router;