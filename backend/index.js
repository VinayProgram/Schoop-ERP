const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors())

app.get('/',(req,res)=>{res.send('Welcome to home page');})
app.use('/admin',require('./modules/adminstration/admission'))
app.use('/register',require('./modules/adminstration/registration'))
app.use('/students',require('./modules/students/studentslogin'))
app.use('/sales',require('./modules/adminstration/sales'))
app.use('/basic',require('./modules/adminstration/basiccommands'))
app.listen(4500);