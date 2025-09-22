const Bus=require('../models/bus');
const { Op } = require('sequelize');
const addBus = async (req, res) => {
    try {
        const { bus_name, total_seats, available_seats } = req.body;
        if (!bus_name || !total_seats || available_seats === undefined) {
            return res.status(400).json({ error: 'Bus name, total seats, and available seats are required.' });
        }
        const newBus = await Bus.create({ bus_name, total_seats, available_seats });

        res.status(201).json(newBus);
    } catch (error) {
        console.error('Error adding bus:', error);
        res.status(500).json({ error: 'Failed to add bus.' });
    }
};

const getAvailableBuses = async (req, res) => {
    try {
        const requiredSeats = parseInt(req.params.seats, 10);

        if (isNaN(requiredSeats)) {
            return res.status(400).json({ error: 'A valid number of seats is required.' });
        }
        const availableBuses = await Bus.findAll({
            where: {
                available_seats: {
                    [Op.gt]: requiredSeats
                }
            }
        });

        res.status(200).json(availableBuses);
    } catch (error) {
        console.error('Error fetching available buses:', error);
        res.status(500).json({ error: 'Failed to retrieve available buses.' });
    }
};
const getBusBookings = async (req, res) => {
    try {
        const busId = req.params.id;

        const bookings = await Booking.findAll({
            where: { busId: busId },
            include: [{
                model: User,
                attributes: ['name', 'email'] 
            }],
            attributes: ['id', 'seatNumber']
        });

        const formattedBookings = bookings.map(booking => ({
            id: booking.id,
            seatNumber: booking.seatNumber,
            user: booking.User 
        }));

        res.status(200).json(formattedBookings);
    } catch (error) {
        console.error('Error fetching bus bookings:', error);
        res.status(500).json({ error: 'Failed to retrieve bus bookings.' });
    }
};

module.exports = {
    addBus,
    getAvailableBuses,
    getBusBookings
};

