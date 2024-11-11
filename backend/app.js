import express from 'express';
import 'dotenv/config';
import connect from './config/db-connection.js';


const app = express();
const PORT = 3000 || process.PORT;

connect(()=>{
    app.listen(PORT, (err)=>{
        if(err)
            console.log(err);
        console.log("Server started...");
    });
});