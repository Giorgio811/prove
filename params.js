const express = require("express");
const app = express();

app.get("/about/:id", (req, res) => {
  var id = req.params.id;
  res.send("ciao" + id);
});

app.listen(8080);
