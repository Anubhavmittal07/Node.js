//Code to demo transform using pipe
import fs from 'fs'
import zlib from 'zlib'

//Create read stream
const readStream= fs.createReadStream("./test1.txt")
const gzip =zlib.createGzip(readStream)

//Create and write on stream
const writeStream = fs.createWriteStream('./data.txt')

//Do create and use pipe
readStream.pipe(gzip).pipe(writeStream)
