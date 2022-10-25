import { mongoose } from "mongoose";

const profileSchema = new mongoose.Schema({

},
{timestamps: true}
);

export default mongoose.model('Profile',profileSchema);