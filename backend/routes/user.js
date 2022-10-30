import express from 'express'
import { getSingleUserController, getUserController } from '../controller/user.js';

const router = express.Router();
//get single user
router.get('/:userId',getSingleUserController);
//delete a single user 
router.delete('/:userId');
//create a new user
router.post('/');
//get all users
router.get('/',getUserController);

export default router;