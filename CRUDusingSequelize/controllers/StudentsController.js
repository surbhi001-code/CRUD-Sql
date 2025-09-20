const db=require('../utils/db-connection');
const Student=require('../models/students');
const IdentityCard=require('../models/identityCard');
 const addEntries= async (req,res)=>{
   try{
    const { email, name } =req.body;
    const student= await Student.create({
     email:email,
     name:name
    })
    res.status(201).send(`User with ${name} is created.`);

  }catch(err){
    res.status(500).send("Unable to make entry");
  }
}

const updateEntry=async (req,res)=>{
 try{
  const{id}=req.params;
  const{name}=req.body;
  const student= await Student.findByPk(id);
  if(!student){
    res.status(404).send("Student is not found");
  }
  student.name=name;
  await student.save();
  res.status(200).send("User has been updated");
 }
 catch(err){
  res.status(500).send("User cannot be updated");
 }
}
const deleteEntry=async (req,res)=>{
  try {
  const {id}=req.params;
  const student=await Student.destroy({
    where:{
      id:id
    }
  })
  if(!student){
    res.status(404).send('USer is not found');
  }
  res.status(201).send('USer is deleted');

  } catch (error) {
    console.log(error);
    res.send("Error encountered while deleteing");
  }
}
  const addingValuesToStudentsandIdentityCard= async (req,res)=>{
   try {
    const student=await Student.create(req.body.students);
    const idCard=await IdentityCard.create({
      ...req.body.IdentityCard,
      studentId:student.id,

    });
    res.status(201).json({student,idCard});
   } catch (error) {
    res.status(500).json({error:error.message});
   }
  }
module.exports={
    addEntries,
    updateEntry,
    deleteEntry,
    addingValuesToStudentsandIdentityCard,
}