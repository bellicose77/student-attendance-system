import mongoose from "mongoose";

const adminattendenceSchema = new mongoose.Schema({
    timilimit:{
        type: Number
    },
    status:String,
    createdTime:{
        type:Date
    }

},
{
    timestamps:true
});

export default mongoose.model('AdminAttendence',adminattendenceSchema);