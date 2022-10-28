import { createNewUser, findUserByProperty } from "./user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import error from '../utils/error.js'

 export const registerService = async({name,email,password})=>{
    let user = await findUserByProperty('email',email) 

    if(user){
       throw error("User already exits",400)
    }
    const saltRound =10;
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = await  bcrypt.hashSync(password,salt); 
    return createNewUser({name,email,password:hash});


};

export const loginService = async ({email,password})=>{
    const user = await findUserByProperty('email',email)
    console.log("coming from login service",user)
    if(!user){
        throw error("Invaild credentials",400)
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw error("Incorrect password",400)
    }
    const payload = {
        _id:user._id,
        name: user.name,
		email: user.email,
		roles: user.roles,
		accountStatus: user.accountStatus
    }
    return jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'2h'})

}