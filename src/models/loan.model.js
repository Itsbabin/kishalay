import mongoose from "mongoose";
const {Schema} = mongoose;

const loanSchema = Schema({
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
    amoun:{
        type: Number,
        required: true,
        trim: true
    },
    paidAmoun:{
        type: Number,
        required: true,
        trim: true
    },
    banch :{
        type: Schema.Types.ObjectId,
        ref: "Bank",
        required : true
    },
    date : {
        type : Date,
        required : true
    },
    closingDate : {
        type : Date,
        required : true
    },
    processFess : {
        type : Number,
        required : true
    },
    loanInsFess : {
        type : Number,
        required : true
    }
},{ timestamps : true })

export const Loan = mongoose.model("Loan",loanSchema);
