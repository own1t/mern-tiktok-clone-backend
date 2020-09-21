import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";

// app config
const app = express();
const port = 8000;

// middleware

// db config

// api endpoint
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/api/posts", (req, res) => res.status(200).send(Data));

// listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
