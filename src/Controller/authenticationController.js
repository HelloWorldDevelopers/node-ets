const jwt=require('../JWT/Jwt')
const UserRepo=require('../Repo/UserRepo')
const {messageConstant}=require('../Constants/MessageConstant')
module.exports.signUp= async(req,res)=>{
  
        const user=await UserRepo.checkUserIsExist(req.body);
        console.log(user);
        if(user){
         res.send({
            [messageConstant.TOKEN]: jwt.createToken(user),
            [messageConstant.SUCCESS]: true
        })   
    }else{
        res.send({
            [messageConstant.TOKEN]: null,
            [messageConstant.SUCCESS]: true
        })  
    }
 
}