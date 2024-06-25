const express=require("express")
const authenticationController=require("../Controller/authenticationController")
const authenticationRoute=express.Router()
authenticationRoute.route("/signUp").post(authenticationController.signUp)

module.exports=authenticationRoute;