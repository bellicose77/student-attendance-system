import { createNewUser, findUserByProperty } from "./user.js";
import bcrypt from 'bcrypt'

 export const registerService = async({name,email,password})=>{
    let user = await findUserByProperty('email',email) 

    if(user){
       throw error("User already exits")
    }
    const saltRound =10;
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(password,salt); 
    console.log(hash)

    return createNewUser({name,email,password:hash});


}