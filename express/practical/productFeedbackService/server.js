const express=require('express')
const app=express()
const PORT =9000
app.use(express.json())

const products=[
    {
        id:1,
        prod:"classmate Notebook",
        rating_cnt:1,
        total_rating:5,
        avg_rating:5
    },
    {
        id:2,
        prod:"Elkos dotblue pen",
        rating_cnt:1,
        total_rating:5,
        avg_rating:5
    },
    {
        id:3,
        prod:"zebronics wireless mouse",
        rating_cnt:1,
        total_rating:5,
        avg_rating:5
    }
]

app.get('/api/product',(req,res)=>{
    res.status(200).json({
        msg:"Product retrieved successfully",
        products:products
    })
})
app.post('/api/rate',(req,res)=>{
    const {prodid, rate} = req.body
    
    
    if(!prodid || !rate){
        return res.status(400).json("Both fields are required.")
    }
    const product=products.find(p=>p.id===parseInt(prodid))
    if(!product){
        return res.status(404).json("Product Not Found")
    }
    if(rate<0 || rate>5){
        return res.status(400).json("Rating must be between 1 and 5")
    }
    product.rating_cnt++;
    product.total_rating+=parseInt(rate);
    product.avg_rating=product.total_rating/product.rating_cnt;
    res.json({
        msg:"Success ",
        rating:product.avg_rating,
        count:product.rating_cnt

    })
    
})

app.listen(PORT,()=>{
    console.log("Server Started")
})