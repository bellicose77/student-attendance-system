export const mainHome = async(req,res)=>{
    res.json("Welcome to home page")
}

export const registerController = async(req,res)=>{
    const {name,email,password} = req.body;
    console.log(name,email)
   try{
      
   }catch(err){
    next(err)
   }
}