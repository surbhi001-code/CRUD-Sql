const db=require('../utils/connection');

const addUser = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }

    try {
        const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
        const [result] = await db.query(query, [name, email]);
        
        res.status(201).json({ id: result.insertId, name, email });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error while adding user.' }); 
    }
};

const getAllUsers = async (req, res) => {
    try {
        const query = 'SELECT * FROM users ORDER BY id ASC';
        const [rows] = await db.query(query);
        res.status(200).json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database error while fetching users.' });
    }
};

module.exports = {
    addUser,
    getAllUsers,
};
