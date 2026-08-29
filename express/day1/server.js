const express = require('express')
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    try{
        res.send("Hello There! How's Going Buddy.");
    }
    catch(err){

        console.log(err);
    }
})

app.get('/user',(req,res)=>{
    try{
        res.send("This is the login page")
    }
    catch(err){
        console.log(err);
    }
})
app.post('/about',(req,res)=>{
    try{
        const data=req.body;
        res.json(data);
    }
    catch(err){
        console.log(err)
    }
})

app.listen(4000,()=>{
    console.log("Server started")
})