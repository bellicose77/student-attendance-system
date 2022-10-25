import mongoose, { Schema } from "mongoose";

const studentattendenceSchema = new mongoose.Schema({
     createdDate : Date,
     user:{
        type:Schema.Types.ObjectId,
        ref: 'User'
     },
     adminAttendence:{
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendence'
     }
},
{timestamps:true}
);
export default mongoose.model('StudentAttendence',studentattendenceSchema);