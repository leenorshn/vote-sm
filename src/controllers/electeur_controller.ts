import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const db = new PrismaClient()

var createElecteur=async (req:Request,res:Response)=>{
    try {
        const {full_name,matricule,promotion,faculte} =req.body;
        const newElecteur=await db.electeur.create({
            data:{
                created_at:Date.now(),
                faculte:faculte,
                full_name:full_name,
                matricule:matricule,
                promotion:promotion 
            }
        });
        return res.status(201).json(newElecteur);
    } catch (error) {
        return res.status(500).json(error);
    }
}


var getAllElecteurs=async (req:Request,res:Response)=>{
    try {
        const electeurs=await db.electeur.findMany({include:{
            votes:true
        }})
        return res.status(200).json(electeurs);
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

var deleteElecteur=async (req:Request,res:Response)=>{
    const {id}=req.params;
    try {
        await db.electeur.delete({where:{id:Number(id)}})
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

 var getElecteur=async (req:Request,res:Response)=>{
    const {matricule}=req.params;
    try {
        const electeur=await db.electeur.findOne({where:{matricule:matricule}})
        return res.status(200).json(electeur);
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

export ={getElecteur,getAllElecteurs,createElecteur,deleteElecteur}