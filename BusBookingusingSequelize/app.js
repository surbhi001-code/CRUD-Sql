const express=require("express");
const db=require('./connection/db-connection');
const busRoutes=require('./routes/busRoutes');
const userRoutes=require('./routes/userRoutes');
const bookingRoutes=require('./routes/bookingRoute');
const app=express();
const PORT=4000;
require('./models');
app.use(express.json());
app.use('/buses',busRoutes);
app.use('/user',userRoutes);
app.use('/bookings',bookingRoutes);


db.sync({force:true})
  .then(()=>{
    app.listen(PORT,()=>{
      console.log("Server is started at:",PORT);
   });
})
  .catch((err)=>{
    console.log(err);
});