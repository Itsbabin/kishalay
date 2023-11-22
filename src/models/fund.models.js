import mongoose from 'mongoose'
const { Schema } = mongoose;

const fundSchema = new Schema({
    amoun:{
        type: Number,
        required: true,
        trim: true
    },
    reciverBank:{
         bankname : String, 
         account: Number,
         IFSC: String,
    },
    senderBank:{
        bankname : String, 
        account: Number,
        IFSC: String,
    },
    remark:{
        type: String,
        trim: true
    },
    method:{
        type: Number,
        required: true,   //  if -1 its mean by cash ,,, if 0 mean it bank transfer ,,,, if 1 mean it by cheak 
        trim: true
    },
    HO_Other:{
        type: Boolean,
        required: true
    },
    checkNo:{
         type: String,
         trim: true
    },
    RecOrTrn:{
        type: Boolean,
        required : true
    }
});


export const Fund = mongoose.model("Fund",fundSchema)