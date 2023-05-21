let express = require('express')
let app = express();
let dotenv = require('dotenv');
dotenv.config()
let port = process.env.port || 6700;
// let port =6700;

let categoryRouter = express.Router();
let productRouter = express.Router();

let category = [
    {
        "id":1,
        "category":"Fashion",
        "thumb":"https://i.ibb.co/56VP0Fn/cloths.jpg"
    },
    {
        "id":2,
        "category":"Electronics",
        "thumb":"https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892434.jpg"
    },
    {
        "id":3,
        "category":"Footwear",
        "thumb":"https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/footwear2.jpg"
    }
]

let products = [
    {
        "id":1,
        "product_Name":"Girl top",
        "category":"Fashion",
        "category_id":1,
        "price":2000,
        "size":"Small",
        "iamge":"https://i.pinimg.com/564x/b9/1a/8d/b91a8d1da40f62222923ff70df18fb6a.jpg",
        "color":"Maroon",
        "brand":"gucci"
    },
    {
        "id":2,
        "product_Name":"Girl top",
        "category":"Fashion",
        "category_id":1,
        "price":1500,
        "size":"medium",
        "iamge":"https://m.media-amazon.com/images/I/81NcX2Dc4zL._UL1500_.jpg",
        "color":"Maroon",
        "brand":"gucci"
    },
    {
        "id":3,
        "product_Name":"Girl top",
        "category":"Fashion",
        "category_id":1,
        "price":2000,
        "size":"Small",
        "iamge":"https://4.imimg.com/data4/BJ/UE/MY-31206845/girls-top-dress-500x500.jpg",
        "color":"Maroon",
        "brand":"gucci"
    },
    {
        "id":4,
        "product_Name":"Girl top",
        "category":"Fashion",
        "category_id":1,
        "price":1500,
        "size":"medium",
        "iamge":"https://m.media-amazon.com/images/I/81NcX2Dc4zL._UL1500_.jpg",
        "color":"Maroon",
        "brand":"gucci"
    }
]

// default route
app.get('/',(req,res)=>{
    res.send('hi from express');
})

categoryRouter.route('/').get((req,res)=>{
    res.send(category)
})
categoryRouter.route('/details').get((req,res)=>{
    res.send("Categeroy Deatasils")
})

productRouter.route('/').get((req,res)=>{
    res.send(products)
})
productRouter.route('/details').get((req,res)=>{
    res.send("products Details")
})

app.use('/category', categoryRouter)
app.use('/products', categoryRouter)


app.listen(port,(err)=>{
    if(err) throw err;
    else{
        // console.log("express running on port number 7600")
        console.log(`server is running on port ${port}`)
    }
})
 