const express = require("express");
const mysql = require("mysql2");
const app = express();
const PORT = 4000;


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234567890', 
    database: 'testdb'
});

connection.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Database connection has been established.");

   

    const createUsersTable = `
    CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
    )`;

    const createBusesTable = `
    CREATE TABLE IF NOT EXISTS Buses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(255) NOT NULL,
        totalSeats INT NOT NULL,
        availableSeats INT NOT NULL
    )`;

    const createBookingsTable = `
    CREATE TABLE IF NOT EXISTS Bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT NOT NULL
    )`;

    const createPaymentsTable = `
    CREATE TABLE IF NOT EXISTS Payments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid DECIMAL(10, 2) NOT NULL,
        paymentStatus VARCHAR(50) NOT NULL
    )`;

    connection.query(createUsersTable, (err, results) => {
        if (err) {
            console.error("Error creating Users table:", err);
            connection.end(); 
            return;
        }
        console.log("Users table is ready.");

        connection.query(createBusesTable, (err, results) => {
            if (err) {
                console.error("Error creating Buses table:", err);
                connection.end();
                return;
            }
            console.log("Buses table is ready.");

            connection.query(createBookingsTable, (err, results) => {
                if (err) {
                    console.error("Error creating Bookings table:", err);
                    connection.end();
                    return;
                }
                console.log("Bookings table is ready.");

                connection.query(createPaymentsTable, (err, results) => {
                    if (err) {
                        console.error("Error creating Payments table:", err);
                        connection.end();
                        return;
                    }
                    console.log("Payments table is ready.");
                    console.log("All tables for the Bus Booking System are set up!");
                   
                });
            });
        });
    });
});

app.get('/', (req, res) => {
    res.send("Hello World! Welcome to the Bus Booking System API.");
});

app.listen(PORT, () => {
    console.log(`Server is started and listening on port: ${PORT}`);
});
