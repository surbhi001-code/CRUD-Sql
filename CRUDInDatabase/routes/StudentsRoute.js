const express=require('express');
const router=express.Router();

const studentController=require('../controllers/StudentsController');

router.post('/add', studentController.addEntries);

router.put('/update/:id',studentController.updateEntry);

module.exports=router;