const {getAllVotes,createVotes}=require("./../controllers/vote_controller")

import express from "express"


const voteRoute=express.Router()


voteRoute.route("/votes").get(getAllVotes).post(createVotes)


export =voteRoute