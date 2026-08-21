import fs from 'fs'
const readStream = fs.createReadStream('./Sample.txt')
const writeStream = fs.createWriteStream('./Output.txt')

readStream.on('data', (chunk)=>{
    console.log(chunk)
    writeStream.write(chunk)
})

readStream.on('end',()=>{
    console.log('End of the file');
    writeStream.close()
})

//writeStream.on()