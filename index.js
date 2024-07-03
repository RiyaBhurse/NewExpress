const express = require('express');
const app = express();
let courses = [
    {id: 1, name: 'java'},
    {id: 2, name: 'mern stack'},
    {id: 3, name: 'linear algebra'}
];
app.get('/courses', (req, res) => {
    res.send(courses);
});
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: 'web development'
    };
    courses.push(course);
    res.send(course);
});
app.listen(3000, () => console.log('Listening on port 3000...'));