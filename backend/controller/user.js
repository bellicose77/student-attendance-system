import { findUserByProperty, findUsers } from "../services/user.js"
import { error } from "../utils/error.js";
import { registerController } from "./auth.js";

export const getUserController = async(req,res,next)=>{
    try{
        
        const user = await findUsers();
        if(!user){
            throw error("There is no user",404);
        }
        return res.status(200).json(user);
        

    }catch(e){
        next(e)
    }
};

export const getSingleUserController = async(req,res,next)=>{

    
    try{
        const {userId} = req.params;
        const user = await findUserByProperty('_id',userId);
        if(!user){
            throw error("NO user using this id",404);
        }
         return res.json({message:"here comes the request",user})

    }catch(e){
        next(e);
    }

};

export const deleteById = async(req,res,next)=>{
    const {userId} = req.params;
    try{
        const user = await findUserByProperty('_id',userId);
        if(!user){
            throw error("User not found",400)
        }
        await user.remove();
        return res.status(203).send();

    }catch(e){
        next(e);
    }
};

export const updateById = async(req,res,next)=>{
    const {userId} = req.params;
    const {name,roles,accountStatus} = req.body;
    try{
        const user = await findUserByProperty('_id',userId);
        if(!user){
            throw error("User not found",404)
        }
        user.name = name ?? user.name;
        user.roles= roles ?? user.roles;
        user.accountStatus = accountStatus ?? user.accountStatus;
        await user.save();
        return res.status(200).json({meassage:"User update successfully",user})


    }catch(e){
        next(e);
    }

};

export const postUser = async(req,res,next)=>{
    const {name,email,password,roles,accountStatus} = req.body;
    try{
        const user = await registerController({name,email,password,roles,accountStatus});

    }catch(e){
        next(e);
    }
}