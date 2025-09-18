const{Sequelize}=require('sequelize');
const sequelize = new Sequelize('studentdb', 'root', '1234567890', {
  host: 'localhost',
  dialect: 'mysql',
});
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






















// const mysql=require("mysql2");

// const connection=mysql.createConnection({
//    host:'localhost',
//    user:'root',
//    password:'1234567890',
//    database:'testdb'
// });

// connection.connect((err)=>{
//    if(err){
//     console.log(err);
//     return;
//    }
//    console.log("Connection has been created");
//    const creationQuery=`create table IF NOT EXISTS Students (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(20),
//     email VARCHAR(20)
//    )`

//    connection.execute(creationQuery,(err)=>{
//     if(err){
//         console.log(err);
//         connection.end();
//         return;
//     }
//     console.log("Table is Created");
//    });
// });


// module.exports=connection;