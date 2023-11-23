import mongoose from "mongoose";
const { Schema } = mongoose;

const maturitySchema = Schema({
    name : {
        type: String,
        required : true,
        trim : true
    },
    accountNo : {
        type : Number,
        required : true,
        trim : true
    },
    type : {
        type : String,
        required : true,
        trim : true
    },
    recive:[{
        amoun : Number,
        date : Date
        }
    ],
    maturityAmount : {
        type : Number,
        trim : true
    },
    banch :{
        type: Schema.Types.ObjectId,
        ref: "Bank",
        required : true
    },
    maturityDate : {
        type : Date
    }
},{timestamps : true})

export const Maturity = mongoose.model("Maturity",maturitySchema);