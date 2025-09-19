const{Sequelize}=require('sequelize');
const sequelize = new Sequelize('studentdb', 'root', '1234567890', {
  host: 'localhost',
  dialect: 'mysql',
});
//IEEE
 ( async ()=>{
   try{
    await sequelize.authenticate();
    console.log("Connection to the database has been created");
 }
  catch(err){
   console.log("Error has been detected:",err);
  }
}
) ();

module.exports=sequelize;
