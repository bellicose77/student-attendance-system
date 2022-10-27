import { response } from "express";
i
import { registerService } from "../services/auth";

export const mainHome = async(req,res)=>{
    res.json("Welcome to home page")
}

export const registerController = async(req,res,next)=>{
    const {name,email,password} = req.body;
    console.log(name,email,password);
    if(!name || !email || !password){
        return res.status(400).json({message:"some data is missing"});
    }
   try{
   
    const user = await registerService({name,email,password})
    const credential = await newUser.save();
    console.log("credential",credential)
    if(credential){
        return res.status(200).json({message:"User created successfully"})
    }
      
   }catch(err){
    next(err)
   }
}