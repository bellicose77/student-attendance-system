import mongoose from "mongoose";

const adminattendenceSchema = new mongoose.Schema({

},
{
    timestamps:true
});

export default mongoose.model('AdminAttendence',adminattendenceSchema);