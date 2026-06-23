import mongoose, { Schema } from "mongoose";

interface ISubSection extends Document {
    title: string;
    description: string;
    videoUrl: string;
    duration: string;
}


// subSectionSchema
const subSectionSchema:Schema = new Schema({
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    duration:{
        type: String,
    },
    videoUrl:{
        type: String,
        required: true
    }
});

const SubSection = mongoose.model<ISubSection>("SubSection",subSectionSchema);
export default SubSection;
