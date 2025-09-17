const mysql=require("mysql2");

const connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'1234567890',
   database:'testdb',

});

module.exports=connection;