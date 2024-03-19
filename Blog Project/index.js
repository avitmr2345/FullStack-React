// create a home page where all posts exist, create page, update and delete page
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

let all_posts = [];

app.get("/", (req, res) => {
    res.render("index.ejs", {all_posts});
});

app.post("/new", (req, res) => {
    const {title, content} = req.body;
    all_posts.push({title, content});
    res.redirect("/");
});

app.get("/createPost.html", (req, res) => {
    res.sendFile(__dirname + "/public/html/createPost.html")
});

app.listen(3000, () => {
    console.log("Server running at port 3000.");
});