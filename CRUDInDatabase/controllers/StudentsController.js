const db=require('../utils/db-connection');
 

 const addEntries=(req,res)=>{
   const { email, name } =req.body;
   const insertQuery=`Insert INTO students(email,name) VALUES (?,?)`
   db.execute(insertQuery,[email,name],(err)=>{
    if(err){
      console.log(err);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    console.log("Value has been inserted");
    res.status(200).send(`Student with ${name} successfully added`);
   })
}

const updateEntry=(req,res)=>{
  const{id}=req.params;
  const{name}=req.body;
  const updateQuery=`UPDATE INTO students setname=? where id=?`
  db.execute(updateQuery,[name,id],(err,result)=>{
    if(err){
      console.log(err);
      res.status(500).send(err.message);
      db.end();
      return;
    }
      if(result.affectedRows===0){
        res.status(404).send("Student not found");
        return;
      }
      res.status(200).send("User will updated with");
  })
}
module.exports={
    addEntries,
    updateEntry
}