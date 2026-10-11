const buffer = Buffer.from("Hello Students")
console.log(buffer)
console.log(buffer.toString())
console.log(buffer.length)
console.log(String.fromCharCode(buffer[2]));

//Buffer Creation By Alloc
const buffer2 = Buffer.alloc(10)

//console.log(buffer2);
buffer2.fill("Hello")
console.log(buffer2.toString());

