//Code to demo transform using pipe
const fs=require('fs')
const zlib=require('zlib')

//Create read stream
const readStream= fs.createReadStream("./test1.txt")
const gzip =zlib.createGzip(readStream)

//Create and write on stream
const writeStream = fs.createWriteStream('./data.txt')

//Do create and use pipe
readStream.pipe(gzip).pipe(writeStream)
