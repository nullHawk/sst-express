const express = require('express');
const app = express();
app.use(express.json());

const port = 8000;

let courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get("/courses", (req,res) =>{
    res.json(courses);
});
app.post("/courses",(req,res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.json(courses);
});

app.put("/courses/:id", (req,res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given ID was not found');
    course.name = req.body.name;
    res.json(courses);
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});