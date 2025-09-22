const express=require("express");
const routes=express.Router();
const userController=require('../controllers/userController');

routes.get('/',userController.addUser);
routes.post('/',userController.getAllUsers);
routes.get('/:id/bookings', userController.getUserBookings);

module.exports=routes;