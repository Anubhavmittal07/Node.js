const console = require('console')
const fs=require('fs')
const http=require('http')
// const server=http.createServer((req,res)=>{

//     if(req.url==='/' && req.method==="GET"){
//         fs.readFile('test1.txt',(err,data)=>{
//             if(err){
//                 res.end("Error Occured")
//             }
//             else{
//                 res.end(data)
//                 console.log(req.headers)

//             }
//         })
        
//     }
//     else if(req.url==='/About' && req.method==="GET"){
//         res.write('About Page HANDLING.');
//         res.end();
        
//     }
//     else{
//         res.write("404 Not Found");
//         res.end();
//     }
// });

const server=http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            res.end("Hello!")
            console.log(req.headers);
            res.writeHead(200,{'content-type':''})

        case '/about':
            const user={
                id:1,
                name:"John"
            }
            res.end(JSON.stringify(user))

        // case 'contactus':

        // case '':
        default:
            res.end("Error Occured")
            console.log('Page Not Found')
            res.writeHead(404,{'Content-Type':''})
    }
})
server.listen(3000,()=>{
    console.log("Server Started")
})