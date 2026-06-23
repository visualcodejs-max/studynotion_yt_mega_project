import mongoose, { Document, Schema } from "mongoose";

// otpSchema types
export interface IOtp extends Document {
    email:string,
    otp:string,
    createdAt: Date
}

// otpSchema
const otpSchema:Schema = new Schema({
    email:{
        type:String,
        required:true,
        trim:true,
    },
    otp:{
        type:String,
        required:true,
        trim:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now,
        expires: 4*60
    }
},{timestamps:true});

// registering otp schema 
const Otp = mongoose.model<IOtp>("Otp",otpSchema);
export default Otp;
