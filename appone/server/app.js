import express from 'express';
const app = express();
const port = 5000;

//import the user router
import usersRouter from "./routes/users/index.js";


app.use((req, res, next) => {
    console.log("This Middleware is common middleware for all the routes in the app server");
    console.log(req.ip);
    next();
});


const cb0 = (req, res, next) => {
    console.log("I m bored today");
    res.status(201).send("Something");
    next();
};
const cb1 = (req, res, next) => {
    console.log("Hello From some client");
    next();
};
const cb2 = (req, res) => {
    console.log("Hello From some other client");
};

app.post("/task/schedule", cb0, cb1, cb2);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/tasks", (req, res) => {
    res.send(" I m in get METHOD /tasks");
});

app.use("/users",usersRouter);

app.listen(port, () => {
    console.log(`Server started at ${port}`);
});