const http = require("http")
const port =3001
const hostname= "127.0.0.1"

const server = http.createServer((req,res)=>{
res.statusCode=201;
res.write("node mod basladi");
res.end();

})

server.listen(port,hostname,()=>{
    console.log(`bu server ${port} da calisiyor`)
})