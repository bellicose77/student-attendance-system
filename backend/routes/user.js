import express from 'express'
import { deleteById, getSingleUserController, getUserController, postUser, updateById } from '../controller/user.js';

const router = express.Router();
//get single user
router.get('/:userId',getSingleUserController);
//delete a single user 
router.delete('/:userId',deleteById);

// update an user by id
router.put('/:userId',updateById);
//create a new user
router.post('/',postUser);
//get all users
router.get('/',getUserController);

export default router;