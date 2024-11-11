import jwt from 'jsonwebtoken';

function generateToken(payload) {
    const token = jwt.sign(payload, process.env.SECRET_KEY);
    return token;
}

// function verifyToken(req, res) {
//     try {

//         if(!req.cookies.token)
//         const payload = jwt.verify(req.cookies.token, process.env.SECRET_KEY);

        

//     }
//     catch (error) {

//     }
// }

// // res.status(404).json({ done: false, message: 'Invalid Email', error: null });
export { generateToken };