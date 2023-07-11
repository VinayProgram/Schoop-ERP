let connection=require('../Connection')
const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));

app.post('/sales',(req,res)=>{
     let query="INSERT INTO `saraswati admin`.`sales` (Name, Contact, Email, Context) VALUES (?,?,?,?);"
     connection.query(query,[req.body.name,req.body.Contact,req.body.email,req.body.context],(err,result)=>{
         if(err){console.log(err);res.send("Fail")}else{res.send('Thank you')}
     }) 
 })

 module.exports=app