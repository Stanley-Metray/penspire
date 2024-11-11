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
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true,
        match: [/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please fill a valid email address'] // Optional: regex validation
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    },
    tokens : {
        type : Array,
        default : []
    },
    dateCreated: {
        type: Date,
        default: Date.now  
    }
});


const User = mongoose.model('User', UserSchema);

export default User;
