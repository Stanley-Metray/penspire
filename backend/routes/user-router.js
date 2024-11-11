import express from 'express';
import { createUser } from '../controllers/user-controller.js';

const UserRouter = express.Router();

UserRouter.post('/register', createUser);

export default UserRouter;