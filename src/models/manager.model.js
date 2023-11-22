import mongoose from "mongoose";
const {Schema} = mongoose;

const managerSchema = new Schema({
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
    },
    inchargeOf: [{
        type: Schema.Types.ObjectId,
        ref: "Bank"
    }]
},{timestamps: true})

export const Manager = mongoose.model("Manager",managerSchema);