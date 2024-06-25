const Sequelize=require('sequelize')

const sequelize=new Sequelize('etss','root','Vishal0101Mysql',{
    host:'localhost',
    dialect:"mysql"
})

try {
    sequelize.authenticate();   
    console.log("database connect successfully");
} catch (error) {
    console.log("database connect failed");
    
}
module.exports=sequelize;