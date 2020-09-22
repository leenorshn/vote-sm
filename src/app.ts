import express from "express"
import userRoute from "./routes/user_route";
const voteRoute =require( "./routes/votes_route")
const electeurRoute =require( "./routes/electeur_votes")
const candidatRoute =require( "./routes/candidat_routes")
const {init,getIo} =require("./ioConfig");

const app=express()
app.use(express.json())

//cors middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-headers', "Origin,X-Requested-With,Content-Type,Accept,Authorization, auth-token");
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', "PUT,GET,PATCH,POST,DELETE");
        return res.status(200).send({});
    }
    next();
  });

app.use(voteRoute)
app.use(electeurRoute)
app.use(candidatRoute)
app.use(userRoute)

const server=app.listen(3030,()=>{
    console.log(`Serveur en ecoute au port 3030 ....`);
    init(server);
    let io=getIo();
    
})
