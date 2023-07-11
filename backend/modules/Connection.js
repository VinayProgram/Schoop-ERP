let mysql=require('mysql');

const connect=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3309'
})

module.exports=connect;