const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user", (req, res) => {
  let body = req.body;
  res.send(body);
});

app.post("/user", (req, res) => {
  let body = req.body;
  res.send(body);
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
