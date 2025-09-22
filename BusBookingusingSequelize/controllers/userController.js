const User=require('../models/user');
const Booking=require('../models/booking');
const Bus=require('../models/bus');
const addUser= async (req,res)=>{
   try{
    const { email, name } =req.body;
    const user= await User.create({
     email:email,
     name:name
    })
    res.status(201).send(`User with ${name} is created.`);

  }catch(err){
    res.status(500).send("Unable to make entry");
  }
}
const getAllUsers= async (req,res)=>{
  try {
    const users=await User.findAll();
    res.status(200).send("All users are displayed");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to retrieve users");
  }
};
const getUserBookings = async (req, res) => {
    try {
        const userId = req.params.id;

        const bookings = await Booking.findAll({
            where: { userId: userId },
            include: [{
                model: Bus,
                attributes: ['busNumber'] 
            }],
            attributes: ['id', 'seatNumber']
        });

        const formattedBookings = bookings.map(booking => ({
            id: booking.id,
            seatNumber: booking.seatNumber,
            bus: booking.Bus
        }));

        res.status(200).json(formattedBookings);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve user bookings' });
    }
};
module.exports={
    addUser,
    getAllUsers,
    getUserBookings
}