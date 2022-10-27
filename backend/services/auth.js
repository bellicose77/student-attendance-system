import { findUserByProperty } from "./user.js"

 export const registerService = async({name,email,password})=>{
    let user = await findUserByProperty({'email':email}) 

    if(user){
        return res.status(400).json({message:"User already exits"})
    }

}