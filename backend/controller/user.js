import { findUserByProperty, findUsers } from "../services/user.js"
import { error } from "../utils/error.js";

export const getUserController = async(req,res,next)=>{
    try{
        
        const user = await findUsers();
        if(!user){
            throw error("There is no user",404);
        }
        return res.json({meassage:"Something is coming",user})
        

    }catch(e){
        next(e)
    }
};

export const getSingleUserController = async(req,res,next)=>{

    
    try{
        const {userId} = req.params;
        const user = await findUserByProperty(userId);
         console.log(userId);
         return res.json({message:"here comes the request",userId})

    }catch(e){
        next(e);
    }

}