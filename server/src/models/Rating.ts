import mongoose, { Schema } from "mongoose";

// ratingSchema types
interface IRating {
  user: mongoose.Types.ObjectId;
  course: mongoose.Schema.Types.ObjectId;
  rating: number;
  reviews: string;
}

// Define the Rating schema
const ratingSchema: Schema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    reviews: String,
    rating: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

// Export the Rating model
const Rating = mongoose.model<IRating>("Rating", ratingSchema);
export default Rating;
