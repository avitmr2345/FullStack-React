// create a home page where all posts exist, create page, update and delete page
import express from "express";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(3000, () => {
    console.log("Server running at port 3000.");
});