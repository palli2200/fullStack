let express = require('express')
let productRouter = express.Router();

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

productRouter.route('/').get((req,res)=>{
    res.send(products)
})
productRouter.route('/details').get((req,res)=>{
    res.send("this all are product details products Details")
})


module.exports = productRouter;