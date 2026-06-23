import "dotenv/config"
import mongoose from "mongoose";

// connectDB
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    console.log("MongoDB Connected");
  } catch (error: any) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};
