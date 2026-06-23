import app from "./app";
import dotenv from "dotenv";
import { connectDB } from "./config/mongodb";

dotenv.config();

const PORT = process.env.PORT || 4000;

// run server
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
