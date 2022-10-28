export const checkLogin = async (req,res,next)=>{
    const {authorization} = req.headers;
    try{

        const token = authorization.spilt(' ')[1]
        console.log(token);
        next();
    }catch(err){
        next("Authentication failed")
    }

}