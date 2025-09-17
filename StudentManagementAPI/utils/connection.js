const mysql=require("mysql2");

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1234567890',
    database:'studentdb'
});
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Connection has been created");
    const creationQuery=`CREATE TABLE IF NOT EXISTS STUDENTS(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    email VARCHAR(20) UNIQUE,
    age INT
    )`
    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log("Table is created");
    });

});
module.exports=connection;