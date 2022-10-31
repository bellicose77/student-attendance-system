import User from "../model/User.js"

export const findUsers = ()=>{
    return User.find()
}

export const findUserByProperty = (key,value)=>{
    if(key==='_id'){
        return User.findById(value)
    }
    return User.findOne({[key]:value});
}
export const createNewUser = ({name,email,password,roles,currentStatus})=>{
    const user = new User({
        name,
        email,
        password,
        roles:roles ? roles:'STUDENT',
        currentStatus: currentStatus ? currentStatus:'PENDING'
    });
    return user.save()
}