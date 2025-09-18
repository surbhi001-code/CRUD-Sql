const express=require("express");
const db=require('./utils/db-connection');
const studentRoute=require('./routes/StudentsRoute');
const studentModals=require('./models/students');
const app=express();
const PORT=3000;

app.use(express.json());
app.use('/students',studentRoute);
  db.sync({force:true})
  .then(()=>{
    app.listen(PORT,()=>{
      console.log("Server is started at:",PORT);
   });
})
  .catch((err)=>{
    console.log(err);
});



