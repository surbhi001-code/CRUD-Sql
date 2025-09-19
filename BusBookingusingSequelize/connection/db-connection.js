const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('studentdb','root','1234567890',{
    host:'localhost',
    dialect:'mysql'
});
(async ()=>{
    try {
       await sequelize.authenticate();
       console.log("Connection to the database has been created");
    } catch (error) {
        console.log("Errro has been detected",error);
        
    }
})();
module.exports=sequelize;