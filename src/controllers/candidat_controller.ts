import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const db = new PrismaClient()

 var createCandidate=async (req:Request,res:Response)=>{
    try {
        const {full_name,matricule,promotion,faculte,numero,avatar} =req.body;
        const newCandidate=await db.candidat.create({
            data:{
                created_at:Date.now(),
                faculte:faculte,
                full_name:full_name,
                matricule:matricule,
                promotion:promotion ,
                numero:numero ,
                avatar
            }
        });
        return res.status(201).json(newCandidate);
    } catch (error) {
        return res.status(500).json(error);
    }
}


 var getAllCandidats=async (req:Request,res:Response)=>{
    try {
        const candidats=await db.candidat.findMany({include:{votes:true}})
        return res.status(200).json({result:candidats});
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

 var deleteCandidate=async (req:Request,res:Response)=>{
    const {id}=req.params;
    try {
        await db.candidat.delete({where:{id:Number(id)}})
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

 var getCandidat=async (req:Request,res:Response)=>{
    const {matricule}=req.params;
    try {
        const candidat=await db.candidat.findOne({where:{matricule:matricule}})
        return res.status(200).json(candidat);
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

export ={getCandidat,getAllCandidats,createCandidate,deleteCandidate}