import mongoose from "mongoose";
const { Schema } = mongoose;

const hoSchema = new Schema({
    userid : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    name : {
        type: String,
        required: true,
        trim: true,
    },
    password : {
        type: String,
        required: true,
    },
    photoURL : {
        type: String,
        trim: true,
    }
},{timestamps: true})

export const HO = mongoose.model("HO",hoSchema);