import mongoose from "mongoose";

const connect = (startServer)=>{
    mongoose.connect(process.env.URI);
    startServer();
}

export default connect;


