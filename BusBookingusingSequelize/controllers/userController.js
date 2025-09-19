const User=require('../models/user');
const addUser= async (req,res)=>{
   try{
    const { email, name } =req.body;
    const user= await User.create({
     email:email,
     name:name
    })
    res.status(201).send(`User with ${name} is created.`);

  }catch(err){
    res.status(500).send("Unable to make entry");
  }
}
const getAllUsers= async (req,res)=>{
  try {
    const users=await User.findAll();
    res.status(200).send("All users are displayed");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to retrieve users");
  }
};
module.exports={
    addUser,
    getAllUsers
}