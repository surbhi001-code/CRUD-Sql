const express=require("express");
const db=require('./connection/db-connection');
const busRoutes=require('./routes/busRoutes');
const userRoutes=require('./routes/userRoutes');
const app=express();
const PORT=4000;

app.use(express.json());
app.use('/buses',busRoutes);
app.use('/user',userRoutes);


db.sync({force:true})
  .then(()=>{
    app.listen(PORT,()=>{
      console.log("Server is started at:",PORT);
   });
})
  .catch((err)=>{
    console.log(err);
});