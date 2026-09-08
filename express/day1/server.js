const express = require('express')
const app=express()
const studentRoute = require('./routes/studentRoutes')
app.use(express.json())//middleware

app.use((req,res,next)=>{
    
})

app.use('/students',studentRoute)

// let students = [
//     {
//         id:1,
//         name:"Shyam",
//         age:20,
//         course:"Computer Science"
//     },
//     {
//         id:2,
//         name:"Ram",
//         age:21,
//         course:"Informative Technology"
//     }
// ]


// app.get("/students",(req,res)=>{
//     res.json(students)
// })

// app.get("/students/:id",(req,res)=>{
//     const id=parseInt(req.params.id)
//     const stud=students.find(student=>student.id===id)
//     if(!stud){
//         res.status(404).json({
//             message:"Student not found"
//         })
//     }
//     res.json(stud)
// })

// app.post("/students",(req,res)=>{
//     const newStudent={
//         id:students.length+1,
//         name:req.body.name,
//         age:req.body.name,
//         course:req.body.course

//     } 
//     students.push(newStudent)
//     res.status(201).json(newStudent)
// })

// app.delete("/students/:id",(req,res)=>{
//     const stuId=parseInt(req.params.id)
//     const stuIndex=students.find(student=>student.id===stuId)
//     if(stuIndex==-1){
//         res.status(404).json({message:"Student Not Found"})
//     }
//     students.splice(stuIndex,1);
//     res.json({message:"Success"})

// })

// app.use(express.json())
// app.get('/',(req,res)=>{
//     try{
//         res.send("Hello There! How's Going Buddy.");
//     }
//     catch(err){

//         console.log(err);
//     }
// })

// app.get('/user',(req,res)=>{
//     try{
//         res.send("This is the login page")
//     }
//     catch(err){
//         console.log(err);
//     }
// })
// app.post('/about',(req,res)=>{
//     try{
//         const data=req.body;
//         res.json(data);
//     }
//     catch(err){
//         console.log(err)
//     }
// })

app.listen(4000,()=>{
    console.log("Server started")
})