import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req: Request, res: Response)=>{
    res.send("hello");
});

export default app;
