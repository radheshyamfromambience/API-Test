const express = require("express");
const mongoose = require("mongoose");
const server = express();

const dburl = `mongodb+srv://RADHE:RADHE11@cluster0.ig27rpx.mongodb.net/AmbienceLMS`

mongoose.connect(dburl)
.then(()=>{console.log("Database Connected");
}).catch((err)=>{
console.log(err);

})

server.get('/', (req, res)=>{
    res.send("Hello")
})

server.listen(9000, ()=>{
    console.log("Server is runing on port no 9000.");
    
})