//Implement a web appln that provide restfull apis to calculate and return the area & perimeter of square and rectangular field based on user input.
const express=require('express');
const app=express();
const port=3000;


app.get('/area/square',(req,res)=>{
    const side=parseFloat(req.query.side);
    // if(isNaN(side) || side<=0){
    //     return res.status(400).json({error:"Invalid side length"});
    // }
    
    const area=side*side;
    res.json({shape:"square",area:area});
})

// app.get('/perimeter/square/:side',(req,res)=>{
//     const side=parseFloat(req.params.side);

//     const perimeter=4*side;
//     res.json({shape:"square",perimeter:perimeter});
// })

// app.get('/area/rectangle/:length/:width',(req,res)=>{
//     const length=parseFloat(req.params.length);
//     const width=parseFloat(req.params.width);

//     const area=length*width;
//     res.json({shape:"rectangle",area:area});
// })

// app.get('/perimeter/rectangle/:length/:width',(req,res)=>{
//     const length=parseFloat(req.params.length);
//     const width=parseFloat(req.params.width);
//     // if(isNaN(length) || isNaN(width) || length<=0 || width<=0){
//     //     return res.status(400).json({error:"Invalid length or width"});
//     // }

//     const perimeter=2*(length+width);
//     res.json({shape:"rectangle",perimeter:perimeter});
// })

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
