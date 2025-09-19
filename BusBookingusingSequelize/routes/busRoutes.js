const express=require("express");
const busController=require('../controllers/busController');
const routes=express.Router();
routes.post('/',busController.addBus);
routes.get('/avaliable/:seats',busController.getAvailableBuses);
module.exports=routes;