import express from "express"
const voteRoute =require( "./routes/votes_route")
const electeurRoute =require( "./routes/electeur_votes")
const candidatRoute =require( "./routes/candidat_routes")

const app=express()
app.use(express.json())


app.use(voteRoute)
app.use(electeurRoute)
app.use(candidatRoute)


const server=app.listen(3030,()=>{
    console.log(`Serveur en ecoute au port 3030 ....`);
    
})
