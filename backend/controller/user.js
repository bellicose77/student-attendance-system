export const getUserController = async(req,res,next)=>{
    try{
        return res.json({meassage:"Something is coming"})

    }catch(e){
        next(e)
    }
}