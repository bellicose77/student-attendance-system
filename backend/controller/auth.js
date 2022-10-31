import { response } from "express";
import { loginService, registerService } from "../services/auth.js";

export const mainHome = async(req,res)=>{
    res.json("Welcome to home page")
}

export const registerController = async(req,res,next)=>{
    const {name,email,password,roles,currentStatus} = req.body;
    // console.log(name,email,password);
    if(!name || !email || !password){
        return res.status(400).json({message:"some data is missing"});
    }
   try{
   
    const user = await registerService({name,email,password})
    console.log("credential",user)
    if(user){
        return res.status(200).json({message:"User created successfully",user})
    }
      
   }catch(err){
    next(err)
   }
}

export const loginController = async (req,res,next)=>{
    const {email,password} = req.body;
    try{
        const token = await loginService({email,password});
        res.status(200).json({"access_token": token,"message":"Login successfully"})

    }
    catch(err){
        next(err)
    }
}