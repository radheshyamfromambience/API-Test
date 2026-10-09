const express = require('express');
const server = express();

// server.get("/user/:id", (req, res) => {
//     console.log(req.params.id);
//     res.send(req.params.id)
// });


// server.get("/student/:id", (req, res) => {
//     const studentId = req.params.id;

//     res.send(`Student Details of ID ${studentId}`);
// });

// server.get("/result/:class/:roll", (req, res) => {

//     const { class: studentClass, roll } = req.params;

//     res.send(`Class: ${studentClass}, Roll: ${roll}`);

// });

// const students = [
//     { id: 1, name: "Radhe" },
//     { id: 2, name: "Shyam" },
//     { id: 3, name: "Mohan" }
// ];

// server.get("/student/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const student = students.find(s => s.id === id);

//     if (!student) {
//         return res.status(404).send("Student Not Found");
//     }

//     res.json(student);

// });


server.get("/students", (req, res) => {

    const name = req.query.name;

    res.send(`Searching Student: ${name}`);

});




server.listen(9000, ()=>{
    console.log("Server is runing on port no 9000.");
    
})