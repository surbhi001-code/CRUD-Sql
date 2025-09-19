const express=require("express");
const routes=express.Router();
const userController=require('../controllers/userController');

routes.get('/',userController.addUser);
routes.post('/',userController.getAllUsers);
module.exports=routes;