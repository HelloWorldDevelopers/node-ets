const express=require("express");
const bodyParse=require("body-parser")
const cors = require('cors');
const authentication=require("./src/Routes/Authentication")
const userRoute=require("./src/Routes/UserRoute")

const User=require("./src/Model/User")
const Contact=require("./src/Model/Contact")


require("dotenv").config();

const app=express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cors());
app.use(express.json())

/* sync table  */
// User.hasOne(Contact,{foreignKey:'user_id'});
// Contact.belongsTo(User,{foreignKey:'user_id'});
// User.sync();
// Contact.sync();


/* ---------------------------------- */
 
app.use("/api/v1/authenticate",authentication)
app.use("/api/v1/user",userRoute)


/* starting point of the application */
app.listen(process.env.PORT,()=>{
    console.log(`your application running on ${process.env.PORT}...{}`);
});



(async () => {
  try {
    await User.sync();
    await Contact.sync();
    console.log('Database synchronized');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
})();