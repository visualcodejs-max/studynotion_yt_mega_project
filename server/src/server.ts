import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async ()=>{
    app.listen(PORT,()=>{
        console.log("server running on port ${PORT}")
    })
}
startServer();
