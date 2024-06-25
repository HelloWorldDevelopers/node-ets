const { DataTypes } = require('sequelize');
const sequelize=require('../dbConnect/database')
const Contact=require('./Contact')

const User = sequelize.define(
  'User',
  {
     firstName: {
      type: DataTypes.STRING,
     },
    lastName: {
      type: DataTypes.STRING,
     },
      email: {
      type: DataTypes.STRING,
     },
      password: {
      type: DataTypes.STRING,
     },
  },
  {
    timestamps:false
   },
);

User.hasOne(Contact, { foreignKey: 'user_id' });
Contact.belongsTo(User, { foreignKey: 'user_id' });  

module.exports=User;
