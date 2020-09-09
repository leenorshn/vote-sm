import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

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
            //webSocket hire
            return res.status(201).json(vote);
    } catch (error) {
        return res.status(500).json(error);
    }
}

var getAllVotes=async (req:Request,res:Response)=>{
    try {
        const votes=await db.votes.findMany({include:{candidat:true,electeur:true}});
        return res.status(200).json({count:votes.length,data:votes});
    } catch (error) {
        return res.status(500).json(error);
    }
}

export={getAllVotes,createVotes}

