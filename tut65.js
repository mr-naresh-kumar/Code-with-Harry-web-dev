// synchronous or blocking
//-line by line execution 
// Asynchronous or non-blocking
//-line by line execution not guranteed 
//- callbacks will fire
const fs = require("fs");
let text = fs.readFile("tut.text", "utf-8", (a, b)=>{console.log(a, b)});
console.log("this is a message")