const express = require('express')
const server = express();
// Application level
// let user = false
// server.use((req, res, next)=>{
//     if(user){
//     console.log("Yes this is working...");
//     next();
//     }else{
//         console.log("Plz log in");
        
//     }    
    
// })
// Routing level
function func1(req, res, next){
    console.log("Hello, I am Working");
    
}
function func2(req, res, next){
    console.log("Hello, I am Working2");
    
}
server.get('/', func1, (req, res)=>{
    res.send("Server is runing")
})
server.post('/', func2,(req, res)=>{
    res.send("data post")
})
server.put('/', (req, res)=>{
    res.send("data update")
})
server.delete('/', (req, res)=>{
    res.send("data deleted")
})
server.get('/about', (req, res)=>{
    res.send("About is runing")
})

server.get('/contact', (req, res)=>{
    res.send("Contact is runing")
})





server.listen(9000, ()=>{
    console.log("Server is runing on port no 9000.");
    
})