import mongoose, { Document, Schema } from "mongoose";

// userSchema types
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image: string;
  accountType: string;
  profile: mongoose.Types.ObjectId;
  courses: mongoose.Types.ObjectId[];
}

// userSchema
const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    image: String,
    accountType: {
      type: String,
      required: true,
      enum: ["Admin", "Instructor", "Student"],
      trim: true,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },
    courses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true },
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;
