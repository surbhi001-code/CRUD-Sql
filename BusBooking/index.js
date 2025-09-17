const express=require("express");
const userRoute=require('./routes/userRoutes');
const busRoute=require('./routes/busRoutes');

const app=express();
const PORT=2000;

app.use(express.json());

app.use('/users',userRoute);
app.use('/buses',busRoute);

app.get('/', (req, res) => {
    res.send('Bus Booking API is running!');
});

app.listen(PORT,()=>{
    console.log("Server is started at:",PORT);
})