import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,   
        maxlength: 100  
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100  
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true,
        match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    bio: {
        type: String,
        maxlength: 500,
        default: ""
    },
    profilePic: {
        type: String,
        default: "" // URL of the profile picture or path if storing locally
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    tokens: {
        type: [String], 
        default: []
    },
    dateCreated: {
        type: Date,
        default: Date.now  
    }
});

const User = mongoose.model('User', UserSchema);

export default User;
