import jwt from "jsonwebtoken";

export const checkLogin = async (req,res,next)=>{
    const {authorization} = req.headers;
   // console.log(authorization)
    try{
       const token = authorization.split(' ')[1];
       const decode = await jwt.verify(token,process.env.SECRET_KEY);
        console.log("decode" ,decode);
        const {name,email,roles}=decode;
        next();
    }catch(err){
        next("Authentication failed")
    }

}