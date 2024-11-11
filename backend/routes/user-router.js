import express from 'express';
import { createUser, loginUser, findUserByEmail } from '../controllers/user-controller.js';

const UserRouter = express.Router();

UserRouter.post('/register', createUser);

UserRouter.post('/login', loginUser);

UserRouter.post('/search-user', findUserByEmail);

export default UserRouter;