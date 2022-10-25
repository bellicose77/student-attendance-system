import { mongoose, Schema } from "mongoose";

const profileSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    phone:{
        type:String
    },
    avatar:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },

},
{timestamps: true}
);

export default mongoose.model('Profile',profileSchema);