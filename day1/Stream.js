import fs from 'fs'
const readStream = fs.createReadStream('./Sample.txt')
const writeStream = fs.createWriteStream('./Output.txt')

// readStream.on('data', (chunk)=>{
//     console.log(chunk)
//     writeStream.write(chunk)
// })

// readStream.on('end',()=>{
//     console.log('End of the file');
//     writeStream.close()
// })

readStream.pipe(writeStream)//creating pipe btw readstream & writestream

writeStream.on('finish',()=>{//calling on method of writestream
    console.log("Finished writing to a file");
});
