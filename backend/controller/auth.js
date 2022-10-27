import { response } from "express";
import User from "../model/User";
import bcrypt from 'bcrypt'

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
    const user = await User.findOne({email:email});
    if(user){
        return res.status(400).json({message:"User already exits"})
    }
    const saltRound =10;
    const hash = bcrypt.hashSync(password,saltRound); 
    const newUser = new User({name:name,email:email,password:hash})
    const credential = await newUser.save();
    if(credential){
        return res.status(200).json({message:"User created successfully"})
    }
      
   }catch(err){
    next(err)
   }
}