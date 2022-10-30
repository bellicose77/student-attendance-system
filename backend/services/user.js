import User from "../model/User.js"

export const findUsers = ()=>{
    
}

export const findUserByProperty = (key,value)=>{
    if(key==='_id'){
        return User.findById(value)
    }
    return User.findOne({[key]:value});
}
export const createNewUser = ({name,email,password})=>{
    const user = new User({name,email,password});
    return user.save()
}