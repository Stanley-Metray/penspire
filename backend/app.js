import express from 'express';
import 'dotenv/config';
import connect from './config/db-connection.js';
import configRoutes from './config/routes-config.js';

console.clear();

const app = express();
const PORT = 3000 || process.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// configuring all routes
configRoutes(app);

connect(()=>{
    app.listen(PORT, (err)=>{
        if(err)
            console.log(err);
        console.log("Server started...");
    });
});