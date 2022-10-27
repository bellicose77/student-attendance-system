import User from "../model/User"

export const findUserByProperty = (key,value)=>{
    if(key===_id){
        return User.findById(value)
    }
    return User.findOne({[key]:value});
}