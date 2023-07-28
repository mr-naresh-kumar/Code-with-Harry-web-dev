const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('tut61.html')
const sever = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end(fileContent)
})
sever.listen(80, '127.0.0.1', ()=>{
    console.log("Listening on port 80")
})  