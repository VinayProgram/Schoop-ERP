let connection = require("../Connection");
const express = require("express");
let logincheck = require("../../middleware/loginteacher")
const app = express();
app.use(express.json({ limit: "50mb" }));



app.post("/createnewbatch",logincheck, (req, res) => {
  let year = req.body.year
  connection.query("create database " + req.body.year,(err, result) => {console.log(result);});
  let studets="CREATE TABLE " +year +".Students (Studentid int unique not null primary key,FullName varchar(255),Address varchar(255),password varchar(255),joining_date DATETIME,UNIQUE (StudentId));"
  connection.query(studets,(err, result) => {if(err){console.log(err)}else{console.log(result)}})
  let attendance=`CREATE TABLE \`${year}\`.attendance (StudentId INT,AttendanceDate DATETIME,present VARCHAR(10),FOREIGN KEY (StudentId) REFERENCES students(StudentId))`;
  connection.query(attendance,(err,result)=>{
  console.log(err,result)
  })
  let Fees=`CREATE TABLE \`${year}\`.fees (StudentId INT,Totalfees INT,PaidTodate INT,Remaining INT,FOREIGN KEY (StudentId) REFERENCES students(StudentId))`;
  connection.query(Fees,(err,result)=>{
  console.log(err,result)
  })

  let PersonalNotice=`CREATE TABLE \`${year}\`.PersonalNotices (StudentId INT,Message varchar(400),FOREIGN KEY (StudentId) REFERENCES students(StudentId))`;
  connection.query(PersonalNotice,(err,result)=>{
  console.log(err,result)
  })

  let CommonNotice=`CREATE TABLE \`${year}\`.Notices (Message varchar(400))`;
  connection.query(CommonNotice,(err,result)=>{
  console.log(err,result)
  })

  let Marksheetquery=`CREATE TABLE \`${year}\`.Marksheet (StudentId INT,semester varchar(15),SubjectName varchar(20),Marks VARCHAR(20),Dated DATETIME,FOREIGN KEY (StudentId) REFERENCES students(StudentId))`;
   connection.query(Marksheetquery, (err, result) => {
      console.log(result)
      console.log(err)
    });





  res.send("Created batch")
});

app.post("/Notice",logincheck,(req,res)=>{
  let type=req.body.type
  if(type=="insert"){
  const query = `INSERT INTO \`${req.body. batch}\`.Notices (Message) VALUES (?);`;
  connection.query(query, [req.body.mess], (err, result) => {
    res.send('Done')
    console.log(err)
  });
  }
  else if(type=='DeleteNotice')
  {
    const query = `delete from \`${req.body. batch}\`.notices where Message=?`;
    connection.query(query,[req.body.message],(err, result) => {
      res.send('Done')})
  }

  else if(type=='ShowNotice')
  {
    const query = `select * from \`${req.body. batch}\`.notices`;
    connection.query(query,[req.body.message],(err, result) => {
      if(err){res.send('error')}else{
      res.send(result)}
    })
  }
})


app.post("/managestudent",logincheck,(req,res)=>{
    let type=req.body.type
    if(type=='insert'){ 
      const query = `INSERT INTO \`${req.body.batch}\`.students (Studentid, FullName, Address, password, joining_date) VALUES (?, ?, ?, ?, ?);`;
      connection.query(query, [req.body.id, req.body.name, req.body.add, req.body.pass, req.body.join], (err, result) => {
        // Handle the query result or error
        if(err){res.send('err')}else{res.send('done')}
        console.log(err)
      });
    }
    else if(type=='update'){
      const query = `update \`${req.body.batch}\`.students SET Studentid=?, FullName=?, Address=?, password=?, joining_date=? where Studentid=?;`;
      connection.query(query, [req.body.Studentid, req.body.FullName, req.body.Address,req.body.password,req.body.joining_date,req.body.Studentid], (err, result) => {
        if(err){res.send('err');console.log(err)}else{res.send('done')}
      })
    }
    else if(type=='delete'){
      const query = `DELETE FROM \`${req.body.batch}\`.students WHERE Studentid = ?;`;
      connection.query(query, [req.body.studentId], (err, result) => {
        if(err){res.send('err')}else{res.send('done')}
      })
    }
    else if(type=='Notice'){ 
      const query = `INSERT INTO \`${req.body.batch}\`.personalnotices (StudentId,Message) VALUES (?, ?);`;
      connection.query(query, [req.body.id, req.body.message], (err, result) => {
        if(err){res.send('err');console.log(err)}else{res.send('done');console.log(result)}
      });
    }

    else if(type=='ShowNotice'){ 
      const query = `select * from \`${req.body.batch}\`.personalnotices where StudentId = ?;`;
      connection.query(query, [req.body.id], (err, result) => {
        if(err){res.send('err');console.log(err)}
        else{res.send(result)}
      })
    }

    else if(type=='deleteNotice'){ 
      const query = `delete from \`${req.body.batch}\`.personalnotices where (StudentId,Message)=(?,?)`
      connection.query(query, [req.body.id,req.body.message], (err, result) => {
        if(err){res.send('err');console.log(err)}
        else{res.send("Done")}
      })
    }

})

app.post("/manageattendance",logincheck,(req,res)=>{
  let type=req.body.type
  var date = new Date(req.body.givendate);
  var isoDate = new Date(date.toUTCString());

  if(type=='insert'){ 
    const query = `INSERT INTO \`${req.body.batch}\`.attendance (StudentId, AttendanceDate, present) VALUES ( ?, ?, ?);`;
    connection.query(query, [req.body.id, isoDate, req.body.present], (err, result) => {
      // Handle the query result or error
    });
  }
  else if(type=='delete'){
    const query = `DELETE FROM \`${tableName}\`.attendance WHERE (Studentid,AttendanceDate) = (?,?);`;
    connection.query(query, [req.body.studentId,req.body.date], (err, result) => {
    })
  }
  else if(type=='deletesheet')
  {
    const query = `Truncate \`${tableName}\`.attendance`;
    connection.query(query, (err, result) => {})
  }
  res.send("done")
})

app.post("/managefees",logincheck,(req,res)=>{
  let type=req.body.type
  if(type=='Showfees'){
    const query = `select * from \`${req.body.batch}\`.fees where (StudentId)=(?);`;
    connection.query(query, [req.body.id], (err, result) => {
      if(err){res.send("No Fees")}
      res.send(result)
      console.log(err+result)
    });
  }
  if(type=='insert'){ 
    const query = `INSERT INTO \`${req.body.batch}\`.fees (StudentId, Totalfees, PaidTodate, Remaining) VALUES ( ?, ?, ?, ?);`;
    connection.query(query, [req.body.id, req.body.totalfees, req.body.payment, req.body.remaining], (err, result) => {
      // Handle the query result or error
      res.send('done')
      console.log(err+result)
    });
  }
  else if(type=='update'){
    const query = `update \`${req.body.batch}\`.fees set Totalfees=?,paidtodate=?,remaining=? where Studentid=?`;
    connection.query(query, [req.body.totalfees, req.body.payment, req.body.remaining,req.body.id], (err, result) => {
    console.log(err)
    console.log(result)
      res.send('done')
    })
  }
  else if(type=='deleteFeesSheet')
  {
    const query = `Truncate \`${req.body.batch}\`.fees`;
    connection.query(query, (err, result) => {})
  }
})

app.post("/markesheet",logincheck,(req,res)=>{
  let type=req.body.type
  if(type=='delete'){ 
    const query = `delete from \`${req.body.batch}\`.marksheet where (StudentId, semester,SubjectName, Marks)=( ?, ?, ?,?);`;
    connection.query(query, [req.body.id, req.body.semester, req.body.subjectname, req.body.marks], (err, result) => {
      res.send(result)
    });
  }
  
  else if(type='insert'){
    const query = `INSERT INTO \`${req.body.batch}\`.marksheet (StudentId, semester,SubjectName, Marks,Dated) VALUES ( ?, ?, ?, ?,?);`;
    connection.query(query, [req.body.id, req.body.semester, req.body.subjectname, req.body.marks,req.body.givendate], (err, result) => {
      console.log(err)
      res.send(result)
    });
  }
  else if(type=='deleteSheet')
  {
    const query = `Truncate \`${tableName}\`.marksheet`;
    connection.query(query, (err, result) => {})
    res.send(result)
  }
  
})

module.exports=app