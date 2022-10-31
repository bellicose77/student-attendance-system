import mongoose from "mongoose";

const userSchema  = new  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:[String],
        required:true,
        default:['Student']
    },
    accountStatus:{
        type: String,
        enum:['PENDING','ACTIVE','REJECTED'],
        default:'PENDING',
        required: true
    }

},{timestamps: true}
);
export default mongoose.model("User",userSchema);