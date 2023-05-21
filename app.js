let express = require('express')
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let morgan = require('morgan')
let fs = require('fs')
let port = process.env.port || 6700;
// let port =6700;

// let categoryRouter = require('./src/controller/categoryRouter');
// let productRouter = require('./src/controller/productRouter');

let menu = [
    {name:'Category', link:'/category'},
    {name:'Products', link:'/p'}
]

let categoryRouter = require('./src/controller/categoryRouter')(menu);
let productRouter = require('./src/controller/productRouter')(menu);

// middleWear
// app.use(morgan('dev'))
// app.use(morgan('common'))
app.use(morgan('common',{stream:fs.createWriteStream('./app.log')}))

// static file path 
app.use(express.static(__dirname+'/public'))

// html file path 
app.set('views','./src/views')

// view engine 
app.set('view engine','ejs')

// default route
app.get('/',(req,res)=>{
    // res.send('hi from express');
    res.render('index',{title:'Home Page',menu})
})

app.use('/category', categoryRouter)
app.use('/p', productRouter)


app.listen(port,(err)=>{
    if(err) throw err;
    else{
        // console.log("express running on port number 7600")
        console.log(`server is running on port ${port}`)
    }
})
 