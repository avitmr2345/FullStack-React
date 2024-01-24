import express from "express";

const app = express();
const port = 3000;

function logger (req, res, next){   //custom middleware 
  console.log("Request method: ", req.method);
  console.log("Request url: ", req.url);
  next();       //it says I'm done with all of my middleware functionality and proceed to next step of handling the request

}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
