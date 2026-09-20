const fs=require('fs')

fs.writeFile('test.txt',"Hello",(err)=>{
    if(err) throw err;
    console.log("File Created");
})