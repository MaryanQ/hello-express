"use strict";

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hello Express.js!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.put("/test", (req, res) => {
  res.send("got a PUT request");
});

app.delete("/test", (req, res) => {
  res.send("got a POST request");
});

app.post("/test", (req, res) => {
  res.send("got a delete request");
});
