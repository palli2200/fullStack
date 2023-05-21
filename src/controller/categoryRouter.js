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
        "category":"Essential",
        "thumb":"https://www.loveandoliveoil.com/wp-content/uploads/2019/11/food-photography-essentials-FEAT.jpg"
    },
    {
        "id":5,
        "category":"Footwear",
        "thumb":"https://okcredit-blog-images-prod.storage.googleapis.com/2020/12/footwear2.jpg"
    }
]

function router(menu){

    categoryRouter.route('/').get((req,res)=>{
        // res.send(category)
        // res.render('category',{title:'Category Page',data:category})
        // res.render('category',{title:'Category Page',category:category})
        res.render('category',{title:'Category Page',category,menu})
    })
    categoryRouter.route('/details').get((req,res)=>{
        res.send("Categeroy Deatasils")
        
    })

    return categoryRouter

}



module.exports = router