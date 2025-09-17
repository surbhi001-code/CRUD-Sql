const db=require('../utils/connection');
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
const deleteEntry=(req,res)=>{
   const {id}=req.params;
   const deleteQuery=`DELETE from STUDENTS WHERE id:?`
   db.execute(deleteQuery,[id],(err,results)=>{
     if(err){
        console.log(err);
        res.stauts(500).send(err.message);
        db.end();
        return;
     }
     if(results.affectedRows===0){
        res.status(404).send("Student not found");
        return;
      }
      res.status(200).send(`USer with ${id} is deleted`);
    
   })

}
const getAllStudents=(req,res)=>{
  const selectQuery = 'SELECT * FROM students ORDER BY name ASC';

    db.execute(selectQuery, (error, results) => {
        if (error) {
           console.log(err);
           res.status(500).send(err.message);
           return;
        }

        if(results.affectedRows===0){
        res.status(404).send("Cannt get students");
        return;
      }
      res.status(200).send(`All Students are visible`);
    });

}
const getStudentById=(req,res)=>{
  const {id}=req.params;
   const getQuery=`GET STUDENTS WHERE id:?`
   db.execute(getQuery,[id],(err,results)=>{
     if(err){
        console.log(err);
        res.stauts(500).send(err.message);
        db.end();
        return;
     }
     if(results.affectedRows===0){
        res.status(404).send("Student not found");
        return;
      }
      res.status(200).send(`USer with ${id} is find`);
    
   })
}
module.exports={
    addEntries,
    updateEntry,
    deleteEntry,
    getAllStudents,
    getStudentById
}