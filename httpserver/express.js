let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.status(200).json({ mesage: "default get request" });
});

app.get("/demo", (req, res) => {
  res.status(200).json({ mesage: "default mongodb soon" });
});

app.post("/", (req, res) => {
  res.status(200).json({ mesage: "default post request" });
});

app.post("/demo", (req, res) => {
  res.status(200).json({ mesage: "default casandradb soon" });
});

app.listen(8081, () => {
  console.log("server started");
});
