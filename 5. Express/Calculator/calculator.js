import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
});
app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of the calculation is: " + result);
});
app.post("/bmicalculator", function(req, res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var result = w / (h*h);
    res.send("Your BMI is: " + result);
});
app.listen(3000,function(){                                                                                                                                                 
    console.log("Server running at 3000.");
});