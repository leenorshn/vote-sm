import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const {getIo} = require ("./../ioConfig")

const db = new PrismaClient()

 var createVotes=async (req:Request,res:Response)=>{
    try {
        const {electeur_id,candidat_id}=req.body
        const vote=await db.votes.create({
            data:{
                electeur:{
                    connect:{
                        id:electeur_id
                    }
                },
                candidat:{
                    connect:{
                        id:candidat_id
                    }
                },
                created_at:Date.now()
                
            }})
            getIo().emit("votes",{vote});
            return res.status(201).json(vote);
    } catch (error) {
        return res.status(500).json(error);
    }
}

var getAllVotes=async (req:Request,res:Response)=>{
    try {
        const votes=await db.votes.findMany({include:{candidat:true,electeur:true}});
        return res.status(200).json({votes});
    } catch (error) {
        return res.status(500).json(error);
    }
}

var deleteVotes=async (req:Request,res:Response)=>{
    const {id}=req.params
    try {
        const votes=await db.votes.delete({where:{id:Number(id)}});
        return res.status(204);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export={getAllVotes,createVotes,deleteVotes}

