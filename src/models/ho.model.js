import mongoose from "mongoose";
import bcrypt from "bcrypt"
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

hoSchema.pre("save",async function (next){
     this.password = await bcrypt.hash(this.password,10);
     next();
})


export const HO = mongoose.model("HO",hoSchema);