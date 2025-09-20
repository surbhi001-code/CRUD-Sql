const Course=require('../models/courses');
const Students=require('../models/students');
const addCourse = async(req,res)=>{
    try {
        const{name} = req.body;
        const course= await Course.create({'name':name});
        res.json(course);
    } catch (error) {
        res.status(500).json({'error':error.message});
    }
}
const addStudentToCourses = async (req,res)=>{
 try {
    const {stduentId,courseIds}=req.body;
    const student= await Students.findByPk(stduentId);
    const course= await Course.findAll({
        where:{
            id:courseIds,
        }
    })
    await student.addCourse(course);
    const updateStudent=await Students.findByPk(stduentId,{include:Course});
    res.status(200).json(updateStudent);

 } catch (error) {
    
 }
}
module.exports={
    addCourse,
    addStudentToCourses
}