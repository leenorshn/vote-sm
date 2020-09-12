const {getAllVotes,createVotes,deleteVotes}=require("./../controllers/vote_controller")

import express from "express"


const voteRoute=express.Router()


voteRoute.route("/votes").get(getAllVotes).post(createVotes)
voteRoute.route("/votes/:id").delete(deleteVotes)


export =voteRoute