// * fileModule
const fs = require("fs")

// * create and write file
fs.writeFileSync("./file.txt", "this is text data")
// * overwrite file text
fs.writeFileSync("./file.txt", "this is overwrite data")
// * append text
fs.appendFileSync("./file.txt", "\nthis is append text")
// * readFile 
const result = fs.readFileSync("./file.txt", "utf-8")

console.log(result)
// * delete file
fs.unlinkSync("./file.txt")

// * sync vs async
// ! synchronous
console.log("before")
const result2 = fs.readFileSync("./file.txt", "utf-8")
console.log(result2)
console.log("after")
// ! asynchronous

console.log("before")
 fs.readFile("./file.txt", "utf-8", (err, data) => {
    if (err) console.log(err)
    else console.log(data)
})
// console.log(result)
console.log("after")