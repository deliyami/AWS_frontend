require('dotenv').config();
const http = require("http");
const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors())

const port = 3000;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.json({
    REACT_APP_API_URL: process.env.REACT_APP_API_URL,
    REACT_APP_API_PORT: process.env.REACT_APP_API_PORT,
    REACT_APP_S3_URL: process.env.REACT_APP_S3_URL
  })
  res.set({
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Date: Date.now()
  });
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});