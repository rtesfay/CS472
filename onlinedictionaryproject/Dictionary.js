const express = require("express");
const app = express();
const path = require("path");

const db = require("./word");

//db.connect((err) => {
  //if (err) throw err;
  //console.log("Connected to database");
//});

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "/dict.html"));
});

app.post("/word", (req, res) => {
  var text = req.body.term;
  console.log(text);
  db.getWord(req.body.term,(resp)=>{
    return res.send(resp)
  })
  });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port "+PORT);
});