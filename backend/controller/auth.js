import { response } from "express";

export const mainHome = async(req,res)=>{
    res.json("Welcome to home page")
}

export const registerController = async(req,res)=>{
    const {name,email,password} = req.body;
    console.log(name,email)
   try{
    if(!name || !email || !password){
        return res.status(400).json({message:"some data is missing"});
    }
      
   }catch(err){
    next(err)
   }
}