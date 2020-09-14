import express from "express"
const {login,createUser}=require("./../controllers/user_controller")
const userRoute =express.Router()


userRoute.route("/signup").post(createUser)
userRoute.route("/login").post(login)

export =userRoute
