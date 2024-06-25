const express=require("express")
const UserController=require("../Controller/UserController")
const UserRoute=express.Router()
UserRoute.route("/save").post(UserController.saveUser)

module.exports=UserRoute;