import express from "express";
import bodyParser from "body-parser";
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  var n1 = req.body["fName"].length;
  var n2 = req.body.lName.length;
  var ans = n1 + n2;
  res.render("index.ejs",{result: ans});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
