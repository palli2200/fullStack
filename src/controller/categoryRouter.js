let express = require('express')
let categoryRouter = express.Router();

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

categoryRouter.route('/').get((req,res)=>{
    res.send(category)
})
categoryRouter.route('/details').get((req,res)=>{
    res.send("Categeroy Deatasils")
})

module.exports = categoryRouter