import express from "express"
const {getCandidat,getAllCandidats,createCandidate,deleteCandidate}=require("./../controllers/candidat_controller")

const candidateRoute=express.Router()


candidateRoute.route("/candidats").get(getAllCandidats).post(createCandidate)

candidateRoute.route("/candidats/:matricule").get(getCandidat)

candidateRoute.route("/candidats/:id").delete(deleteCandidate)


export =candidateRoute


