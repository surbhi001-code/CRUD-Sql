const {Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../utils/db-connection');

const IdentityCard=sequelize.define('Identitycard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:true
    },
    cardNo:{
      type:DataTypes.INTEGER,
      unique:true,
      allowNull:false
    }
});
module.exports=IdentityCard;