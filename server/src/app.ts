// import
import express, { Request, Response } from "express";
import cors from "cors";

// app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// default route
app.use("/",(req: Request, res: Response)=>{
    res.send("Hello from server");
});

// export app instance
export default app;
