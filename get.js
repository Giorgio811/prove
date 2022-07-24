const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("ciao");
});

app.listen(8080);
