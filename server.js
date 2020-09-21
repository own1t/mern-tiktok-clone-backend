import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = 8000;

// middleware

// db config

// api endpoint
app.get("/", (req, res) => res.status(200).send("Hello World"));

// listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
