import User from "../model/User.js"

export const getUserController = async(req,res,next)=>{
    try{
        
        const user = await User.find({})
        return res.json({meassage:"Something is coming",user})
        

    }catch(e){
        next(e)
    }
}