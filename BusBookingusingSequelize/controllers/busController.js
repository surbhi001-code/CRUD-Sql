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

module.exports = {
    addBus,
    getAvailableBuses,
};

