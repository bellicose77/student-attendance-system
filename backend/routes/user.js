import express from 'express'
import { getUserController } from '../controller/user';

const router = express.Router();
//get single user
router.get('/:userId')
//get all users
router.get('/',getUserController);

export default router;