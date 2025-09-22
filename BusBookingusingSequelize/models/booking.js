const { DataTypes } = require('sequelize');
const sequelize = require('../connection/db-connection');

const Booking = sequelize.define('Booking', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  bus_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seats_booked: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1 
    }
  }
}, {
  tableName: 'bookings',
  timestamps: true
});

module.exports = Booking;