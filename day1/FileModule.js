const fs=require('fs')
const filepath= '../Test.txt'
const content = "Hello Welcome to the File Module Demo"

//fs.writeFileSync(filepath, content)
// fs.writeFile(filepath, content, (err)=>{
//     if(err) throw err;
//     console.log("Your file is saved, don't worry your data will not lose!")
// })

// const res = fs.readFileSync(filepath,"utf-8");
// console.log(res)
// fs.readFile(filepath,"utf-8",(err, data)=>{
//     if(err) throw err;
//     console.log(data)
// })


//fs.appendFileSync(filepath,", here you will know every type functions");

// console.log(fs.readFileSync(filepath,"utf-8"));
// console.log("Thanks!")

fs.readFile(filepath,(err, data)=>{
    if(err) throw err;
    console.log(data)
})
console.log("This Code Will Run First.")