const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==="GET"){
        res.end("Hello all there!!!")
    }
    else if(req.url==='/About' && req.method==="GET"){
        res.write('About Page HANDLING.');
        res.end();
    }
    else{
        res.write("404 Not Found");
        res.end();
    }
    
});
server.listen(3000,()=>{
    console.log("Server Started")
})