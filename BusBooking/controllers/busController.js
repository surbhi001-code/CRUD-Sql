const db=require('../utils/connection');
const addBus = async (req, res) => {
    const { bus_name, total_seats, available_seats } = req.body;

    if (!bus_name || !total_seats || available_seats === undefined) {
        return res.status(400).json({ error: 'Bus name, total seats, and available seats are required.' });
    }

    try {
        const query = 'INSERT INTO buses (bus_name, total_seats, available_seats) VALUES (?, ?, ?)';
        const values = [bus_name, total_seats, available_seats];
        const [result] = await db.query(query, values);

        res.status(201).json({ id: result.insertId, bus_name, total_seats, available_seats });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error while adding bus.' });
    }
};

const getAvailableBuses = async (req, res) => {
    const requiredSeats = parseInt(req.params.seats, 10);

    if (isNaN(requiredSeats)) {
        return res.status(400).json({ error: 'A valid number of seats is required.' });
    }

    try {
        const query = 'SELECT * FROM buses WHERE available_seats > ? ORDER BY available_seats DESC';
        const [rows] = await db.query(query, [requiredSeats]);
        res.status(200).json(rows);
    } catch (err)
    {
        console.error(err);
        res.status(500).json({ error: 'Database error while fetching available buses.' });
    }
};

module.exports = {
    addBus,
    getAvailableBuses,
};
