const User=require('./user');
const booking=require('./booking');
const bus=require('./bus');
User.hasMany(booking);
booking.belongsTo(User);

bus.hasMany(booking);
booking.belongsTo(bus);

module.exports={
    User,
    booking,
    bus
}