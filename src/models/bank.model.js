import mongoose from "mongoose";
const { Schema } = mongoose;

const bankSchema = new Schema({
    name:{
        type: String,
        unique: true,
        trim: true,
    },
    location:{
        type: String,
        unique: true,
        trim: true,
    },
    ifsc:{
        type: String,
        unique: true,
        trim: true,
    },
    photoURL:{
        type: String,
        unique: true,
        trim: true,
    }
},{timestamps: true})

export const Bank = mongoose.model("Bank",bankSchema)