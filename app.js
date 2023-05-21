let express = require('express')
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.port || 6700;
// let port =6700;

// default route
app.get('/',(req,res)=>{
    res.send('hi from express');
})
//test page route
app.get('/test',(req,res)=>{
    res.send("test Route ")
})

app.listen(port,(err)=>{
    if(err) throw err;
    else{
        console.log("xerver running on port number 6700")
    }
})
 