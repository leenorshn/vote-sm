const {getElecteur,getAllElecteurs,createElecteur,deleteElecteur} =require("./../controllers/electeur_controller");

import express from "express"


const electeurRoute=express.Router()

electeurRoute.route("/electeurs").get(getAllElecteurs).post(createElecteur)
electeurRoute.route("/electeurs/:matricule").get(getElecteur)
electeurRoute.route("/electeurs/:id").delete(deleteElecteur)

export =electeurRoute



