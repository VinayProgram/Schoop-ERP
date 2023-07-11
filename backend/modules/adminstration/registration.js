let connection=require('../Connection')
const express = require("express");
const app = express();
app.use(express.json({ limit: "50mb" }));
const jwt=require('jsonwebtoken')
const secrettoken = "Saraswatividya@1010";

app.post('/registerTeacher',(req,res)=>{
   if(req.body.type=="createteacher"){
    let query="INSERT INTO `saraswati admin`.`employees` (`Id`, `NAME`, `contact`, `password`) VALUES (?,?,?,?);"
    connection.query(query,[req.body.id,req.body.name,req.body.contact,req.body.password],(err,result)=>{
        if(err){console.log(err)}else{console.log(result)}
    }) 
    }
    else if(req.body.type="deleteteacher"){
        let query="delete from `saraswati admin`.`employees` where (`Id`,`password`)=(?,?);"
        connection.query(query,[req.body.id,req.body.password],(err,result)=>{
            if(err){console.log(err)}else{console.log(result)}
        })  
    }
    res.send("Registerd")
})

app.post('/login',async(req,res)=>{
    let query = "SELECT Id, name FROM `saraswati admin`.`employees` WHERE (`Id`, `password`) = (?, ?);";
    try {
        connection.query(query,[req.body.id,req.body.password],(error,result)=>{
            if(error){res.send('Error');console.log(error)}
            else if(result.length===0){
                    res.send('Error')
            }
            else{
                console.log(result)
                let assign=jwt.sign(result[0].Id,secrettoken)
                 res.send(assign)
            }   
    })
        }
     catch (error) {
        res.send("error")
    }
    
})

module.exports=app