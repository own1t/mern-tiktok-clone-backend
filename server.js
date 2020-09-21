import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Data from "./data.js";
import Videos from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(express.json());
app.use(cors());

// db config
const connection_url =
  "mongodb+srv://admin:lXrQ6DJCQKY47jRj@cluster0.qqhw3.mongodb.net/tiktokdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoint
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/api/posts/data", (req, res) => res.status(200).send(Data));

app.get("/api/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/api/posts", (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listener
app.listen(port, () => console.log(`Listening on port: ${port}`));
