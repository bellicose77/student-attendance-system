import mongoose from "mongoose";

const studentattendenceSchema = new mongoose.Schema({

},
{timestamps:true}
);
export default mongoose.model('StudentAttendence',studentattendenceSchema);