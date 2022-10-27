import User from '../model/User.js'

 export const registerService = async({name,email,password})=>{

    if(user){
        return res.status(400).json({message:"User already exits"})
    }

}