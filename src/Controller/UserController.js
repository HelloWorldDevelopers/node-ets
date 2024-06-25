const UserRepo=require('../Repo/UserRepo')
const {messageConstant}=require('../Constants/MessageConstant');


module.exports.saveUser = async (req, res) => {
  try {
    const userDetails = req.body;
     const newUser = await UserRepo.createUser(userDetails);
     res.status(201).send(newUser); 
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).send({ error: 'Failed to save user' });
  }
};