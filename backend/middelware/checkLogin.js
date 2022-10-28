export const checkLogin = async (req,res,next)=>{
    const {authorization} = req.headers;
   // console.log(authorization)
    try{
       const token = authorization.split(' ')[1]
        console.log(token);
        next();
    }catch(err){
        next("Authentication failed")
    }

}