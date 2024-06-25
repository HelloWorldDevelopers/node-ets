const User=require('../Model/User')
const Contact=require('../Model/Contact')
module.exports.checkUserIsExist= async(loginDetails)=>{
   try {
        const user = await User.findOne({
            where: {
                email: loginDetails.email,
                password: loginDetails.password
            },
            include: Contact
        });
        
      return  user?user.toJSON():null;
      
    } catch (error) {
        console.error('Error finding user:', error);
        throw error; 
    }
    
}