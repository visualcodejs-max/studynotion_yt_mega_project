import mongoose, { Schema } from "mongoose";

interface ICategory extends Document {
    name: string;
    description: string;
    course: mongoose.Types.ObjectId[];
}

const categorySchema: Schema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    }]
});

const Category = mongoose.model<ICategory>("Category", categorySchema);
export default Category;
