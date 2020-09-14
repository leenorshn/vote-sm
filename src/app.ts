import express from "express"
import userRoute from "./routes/user_route";
const voteRoute =require( "./routes/votes_route")
const electeurRoute =require( "./routes/electeur_votes")
const candidatRoute =require( "./routes/candidat_routes")
const {init,getIo} =require("./ioConfig");

const app=express()
app.use(express.json())


app.use(voteRoute)
app.use(electeurRoute)
app.use(candidatRoute)
app.use(userRoute)

const server=app.listen(3030,()=>{
    console.log(`Serveur en ecoute au port 3030 ....`);
    init(server);
    let io=getIo();
    
})
