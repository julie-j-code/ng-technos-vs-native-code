const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "service-worker.js"));
  });
app.get("/manifest.json", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "manifest.json"));
  });
app.get("/offline.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "offline.html"));
  });

// app.get("/", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
// });
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});




app.listen(process.env.PORT || 4000, () => console.log("Server running..."));
