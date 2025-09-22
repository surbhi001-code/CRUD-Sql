const User=require('../models/user');
const Bus=require('../models/bus');
const Booking=require('../models/booking');
const createBooking= async(req,res)=>{
 try {
        const { userId, busId, seatNumber } = req.body;
        const user = await User.findByPk(userId);
        const bus = await Bus.findByPk(busId);

        if (!user || !bus) {
            return res.status(404).json({ error: 'User or Bus not found.' });
        }

        const booking = await Booking.create({
            seatNumber,
            userId: userId,
            busId: busId
        });
        
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports={
    createBooking
}