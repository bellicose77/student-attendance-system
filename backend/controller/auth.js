import { response } from "express";
import bcrypt from 'bcrypt'

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
   
    const user = await registerService({name,password})
    if(user){
        return res.status(400).json({message:"User already exits"})
    }
    const saltRound =10;
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(password,salt); 
    console.log(hash)
    
    const newUser = new User({name:name,email:email,password:hash})
    const credential = await newUser.save();
    console.log("credential",credential)
    if(credential){
        return res.status(200).json({message:"User created successfully"})
    }
      
   }catch(err){
    next(err)
   }
}