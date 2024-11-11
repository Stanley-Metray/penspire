import User from "../models/user.js";
import { generateToken } from "./auth-controller.js";
import bcrypt from 'bcrypt';

const createUser = async (req, res) => {
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


const loginUser = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email }, '_id firstName email password');

        const isMatch = await bcrypt.compare(req.body.password, user.password);

        if (isMatch) {
            const token = generateToken({id: user._id, email: user.email });
            await User.updateOne({email : user.email}, {$push : {tokens : token}});
            res.status(201).json({
                message: 'Login Successful',
                done: true,
                token
            });

        } else
            res.status(404).json({ done: false, message: 'Invalid Email', error: null });

    } catch (error) {
        if (error.message.includes('jwt')) {
            res.status(401).json({ done: false, message: 'Unauthorized - Token generation failed', error: error.message });
        } else {
            res.status(500).json({ done: false, message: error.message, error: error });
            console.log(error);
        }
    }
}

const findUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email }, 'firstName lastName email dateCreated');

        if (user) {
            res.status(200).json({
                message: 'User Found',
                done: true,
                user: user
            });
        }
        else
            res.status(404).json({ done: false, message: 'Invalid Email', error: null });

    } catch (error) {
        res.status(500).json({ done: false, message: error.message, error: error });
        console.log(error);
    }
}

export { createUser, loginUser, findUserByEmail };