const fs = require("fs");
const text = fs.readFileSync("tut.text", "utf-8");
text =text.replace("content", "rohan");

console.log("the content of the file is")
console.log(text);

console.log("creating a new file...");
fs.writeFileSync("rohan.txt", text);