const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../connection/db-connection');
const Buses=sequelize.define('Buses',{
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  bus_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  total_seats: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1 
    }
  },
  available_seats: {
    type: DataTypes.INTEGER,
    allowNull: false
  } 
})
module.exports=Buses;