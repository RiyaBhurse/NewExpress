const express = require('express');
const app = express();
app.use(express.json());
app.use(middleware);
app.use(loggerMiddleware);
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
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
}
);
app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    course.name = req.body.name;
    res.send(course);
}
);
app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
}
);


app.listen(3000, () => console.log('Listening on port 3000...'));

function middleware(req, res, next) {
    console.log('Logging...');
    next();
}

//loggerMiddleware will return method, ip, hostname, date
function loggerMiddleware(req, res, next) {
    console.log(req.method, req.ip, req.hostname, new Date());
    next();
}