const express=require('express');
const router=express.Router();

const studentController=require('../controllers/studentController');

router.post('/add',studentController.addEntries);
router.get('/',studentController.getAllStudents);
router.get('/:id',studentController.getStudentById);
router.put('/update/:id',studentController.updateEntry);
router.delete('/delete/:id',studentController.deleteEntry);

module.exports=router;