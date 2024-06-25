const { DataTypes } = require('sequelize');
const sequelize=require('../dbConnect/database')

const Contact = sequelize.define(
  'contact',
  {
     address1: {
      type: DataTypes.STRING,
     },
      city: {
      type: DataTypes.STRING,
     },
      distict: {
      type: DataTypes.STRING,
     },
      pincode: {
      type: DataTypes.STRING,
     },
  },
  {
    timestamps:false
   },
);

module.exports=Contact;
