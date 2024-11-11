import User from "../models/user.js";
import { generateToken } from "./auth-controller.js";
import bcrypt from 'bcrypt';

    const createUser = async(req, res)=>{
        try {
            const hashPassword = await bcrypt.hash(req.body.password, 12);
            req.body.password = hashPassword;
            const user = await User.create(req.body);
            const token = generateToken({ id: user._id, email: user.email });
            user.tokens.push(token);
            await user.save();

            res.status(201).json({
                message: 'User created successfully',
                done: true,
                token
            });

        } catch (error) {
            if (error.message.includes('jwt')) {
                res.status(401).json({ done: false, message: 'Unauthorized - Token generation failed', error: error.message });
            } else {
                res.status(500).json({ done: false, message: error.message, error: error });
                console.log(error);
            }
        }
    }

export {createUser};