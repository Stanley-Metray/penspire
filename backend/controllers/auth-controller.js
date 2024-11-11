import jwt from 'jsonwebtoken';

function generateToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;    
}

export {generateToken};