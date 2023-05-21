let express = require('express')
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.port || 6700;
// let port =6700;

let categoryRouter = require('./src/controller/categoryRouter');
let productRouter = require('./src/controller/productRouter');



// default route
app.get('/',(req,res)=>{
    res.send('hi from express');
})

app.use('/category', categoryRouter)
app.use('/products', productRouter)


app.listen(port,(err)=>{
    if(err) throw err;
    else{
        // console.log("express running on port number 7600")
        console.log(`server is running on port ${port}`)
    }
})
 