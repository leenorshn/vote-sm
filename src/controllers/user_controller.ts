import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const db = new PrismaClient();

 var createUser=async (req:Request,res:Response)=>{
    try {
        const {name,email,password}=req.body;
        const user= await db.users.create({
            data:{email,name,password}
        });
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({status:"failed",code:500,message:"Error:>> "+error.message});
    }
}

 var login=async (req:Request,res:Response)=>{
    try {
        const {email,password}=req.body;
        const user=await db.users.findOne({where:{email}});
        if(!user){
            return res.status(404).json({status:"failed",code:404,message:"Error:>> user not found"});
        }
        if(user.password!==password){
            return res.status(400).json({status:"failed",code:400,message:"Error:>> bad request"});
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({status:"failed",code:500,message:"Error:>> "+error.message});
    }
}

export ={createUser,login}