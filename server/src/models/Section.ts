import mongoose, { Schema } from "mongoose";

interface ISection extends Document {
    name: string;
    subSections: mongoose.Types.ObjectId;
}

const sectionSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    subSections: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubSection"
    }
});

const Section = mongoose.model<ISection>("Section", sectionSchema);
export default Section;
