import User from "../model/User"

export const findByProperty = (key,value)=>{
    if(key===_id){
        return User.findById(value)
    }
    return User.findOne({[key]:value});
}