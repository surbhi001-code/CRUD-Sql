const express=require('express');
const router=express.Router();

const studentController=require('../controllers/StudentsController');

router.post('/add', studentController.addEntries);

router.put('/update/:id',studentController.updateEntry);
router.delete('/delete/:id',studentController.deleteEntry);

module.exports=router;