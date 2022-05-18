import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to Users / Home Page");
});

router.post("/register", (req, res) => {
    res.send("Welcome to Users / Register Page");
});

router.post("/login", (req, res) => {
    res.send("Welcome to Users / Login  Page");
});


export default router;