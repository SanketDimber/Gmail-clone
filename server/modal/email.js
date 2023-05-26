import mongoose from "mongoose";

const EmailSchema = new mongoose.Schema({

    to:{
        type: String,
        required: true
    },
    from:{
        type: String,
        required: true
    },
    subject: String,
    body:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    image: String,
    name:String,
    stareed:{
        type: Boolean, 
        required:true,
        default:false
    }, 
   
    bin:{

        type:Boolean,
        required:true,
        default:false
    },
    type:{
        type: String,
        required: true
    }
})

const email = mongoose.model('emails',EmailSchema);

export default email;   
