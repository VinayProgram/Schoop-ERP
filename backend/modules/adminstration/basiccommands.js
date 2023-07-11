let connection = require("../Connection");
const express = require("express");
let logincheck = require("../../middleware/loginteacher")
let studentcheck = require("../../middleware/studentcheck")

const app = express();
app.use(express.json({ limit: "50mb" }));

app.post("/details",logincheck,(req,res)=>{
    console.log(req.token)
    const query = `SHOW DATABASES `;
    connection.query(query, (err, result) => {
        res.send(result)
        console.log(result)
    })
  })

  app.post("/ShowStudents",logincheck,(req,res)=>{
    console.log(req.body.batch)
    const query = `select *  from \`${req.body.batch}\`.Students `;
    connection.query(query, (err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(result)}
        else{res.send(result)}
    })
  })

  app.post("/StudentsAttendance",logincheck,(req,res)=>{
    console.log(req.body.batch)
    const query = `select *  from \`${req.body.batch}\`.attendance `;
    connection.query(query, (err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(result)}
        else{res.send(result),console.log(result)}
    })
  })

  app.post("/Marksheet",logincheck,(req,res)=>{
    console.log(req.body.batch)
    const query = `select *  from \`${req.body.batch}\`.marksheet `;
    connection.query(query, (err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(result)}
        else{res.send(result)}
    })
  })

  app.post("/Notices",logincheck,(req,res)=>{
    console.log(req.body.batch)
    const query = `select *  from \`${req.body.batch}\`.notices `;
    connection.query(query, (err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(result)}
        else{res.send(result)}
    })
  })


  app.post("/Fees",logincheck,(req,res)=>{
    console.log(req.body.batch)
    const query = `select *  from \`${req.body.batch}\`.fees `;
    connection.query(query, (err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(result)}
        else{res.send(result)}
    })
  })

  app.post("/PersonalNotices",studentcheck,(req,res)=>{
    const query = `select *  from \`${req.body.batch}\`.personalnotices `;
    connection.query(query,[req.token],(err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(err)}
        else{console.log(result); res.send(result)}
    })
  })

  app.post("/AttendanceStudents",logincheck,(req,res)=>{
    const query = `select Studentid,FullName  from \`${req.body.batch}\`.students `;
    connection.query(query,[req.token],(err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(err)}
        else{console.log(result); res.send(result)}
    })
  })
 
  app.post("/Studentsdetails",logincheck,(req,res)=>{
    console.log(req.body.type)
  if(req.body.type=='showstudent'){
    const query = `select * from \`${req.body.batch}\`.students where (studentid)=(?)`;
    connection.query(query,[req.body.id],(err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(err)}
        else{console.log(result); res.send(result)}
    }) 
  }
  else if(req.body.type=="attendace"){
    const query = `select * from \`${req.body.batch}\`.attendance where StudentId =? `;
    connection.query(query,[req.body.id],(err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(err)}
        else{console.log(result); res.send(result)}
    })
  }
  else if(req.body.type=="fees"){
    const query = `select * from \`${req.body.batch}\`.fees where StudentId =? `;
    connection.query(query,[req.body.id],(err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(err)}
        else{console.log(result); res.send(result)}
    })
  }
  else if(req.body.type=="notice"){
    const query = `select * from \`${req.body.batch}\`.personalnotices where StudentId =? `;
    connection.query(query,[req.body.id],(err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(err)}
        else{console.log(result); res.send(result)}
    })
  }
  else if(req.body.type=="marksheet"){
    const query = `select * from \`${req.body.batch}\`.marksheet where StudentId =? `;
    connection.query(query,[req.body.id],(err, result) => {
        if(err){res.send({'nodata':'nodata'});console.log(err)}
        else{console.log(result); res.send(result)}
    })
  }
  })




  module.exports=app    