const express = require('express')

const server = express();

server.use(express.json());

server.post('/',(req, res)=>{

    console.log(req.body);
    res.send("Done")

})



server.listen(9000, ()=>{
    console.log("Server is runing on port no 9000.");
    
})