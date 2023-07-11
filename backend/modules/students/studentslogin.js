let connection=require('../Connection')
const express = require("express");
const jwt=require('jsonwebtoken')
const app = express();
const secrettoken = "Saraswati-childs@$%^&^&2707";
const studentcheck =require('../../middleware/studentcheck')
app.use(express.json({ limit: "50mb" }));
app.post('/login',async(req,res)=>{
    let studentbatch=req.body.studentbatch
    let query = `SELECT Studentid, FullName FROM \`${studentbatch}\`.students WHERE (Studentid, password) = (?, ?);`;
    connection.query(query,[req.body.id,req.body.password],(error,result)=>{
        if(error){res.send('Error');console.log(error)}
        else if(result.length===0){
            res.send('Error')
    }
        else{
            console.log(result[0].Studentid+result[0].FullName)
            let assign=jwt.sign(result[0].Studentid,secrettoken)
            res.send(assign)
        }
   })
})

app.post('/marksheet',studentcheck,(req,res)=>{
    let studentbatch=req.body.studentbatch
    let query = `SELECT * FROM \`${studentbatch}\`.marksheet WHERE (Studentid) = (?);`;
    connection.query(query,[req.token],(error,result)=>{
        if(error){res.send('error');console.log(error)}
        else{
            res.send(result)
        }
   })
})

app.post('/attendace',studentcheck,(req,res)=>{
    let studentbatch=req.body.studentbatch
    let query = `SELECT * FROM \`${studentbatch}\`.attendance WHERE (Studentid) = (?);`;
    connection.query(query,[req.token],(error,result)=>{
        if(error){res.send('error');console.log(error)}
        else{
            res.send(result)
        }
   })
})

app.post('/fees',studentcheck,(req,res)=>{
    let studentbatch=req.body.studentbatch
    let query = `SELECT * FROM \`${studentbatch}\`.fees WHERE (Studentid) = (?);`;
    connection.query(query,[req.token],(error,result)=>{
        if(error){res.send('error');console.log(error)}
        else{
            res.send(result)
        }
   })
})


app.post('/profile',studentcheck,(req,res)=>{
    let studentbatch=req.body.studentbatch
    let query = `SELECT * FROM \`${studentbatch}\`.students WHERE (Studentid) = (?);`;
    connection.query(query,[req.token],(error,result)=>{
        if(error){res.send('error');console.log(error)}
        else{
            res.send(result)
        }
   })
})

app.post('/Notices',studentcheck,(req,res)=>{
    let studentbatch=req.body.studentbatch
    let query = `SELECT * FROM \`${studentbatch}\`.Notices`;
    connection.query(query,(error,result)=>{
        if(error){res.send('error');console.log(error)}
        else{
            res.send(result)
        }
   })
})

module.exports=app