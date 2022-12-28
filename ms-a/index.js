const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const msbHost = process.env.MSB_HOST || "localhost";
const msbPort = parseInt(process.env.MSB_PORT) || 3000;

app.get("/", (req, res) => {
  res.send("Hello World from microsevice A: v2");
});

app.get("/ms-b", (req, res) => {
  axios.get(`http://${msbHost}:${msbPort}`).then((response) => {
    res.send(response.data);
  });
});

app.get("/healthz", (req, res) => {
  res.send("Healthy");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
