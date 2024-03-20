import express from "express";
import methodOverride from "method-override";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

let all_blogs = [];

app.get("/", (req, res) => {
  res.render("index.ejs", { all_blogs });
});

//show new Blog form
app.get("/new", (req, res) => {
  res.render("new.ejs");
});

//create Blog
app.post("/createBlog", (req, res) => {
  const id = all_blogs.length + 1;
  const { title, content } = req.body;
  all_blogs.push({ id, title, content });
  res.redirect("/");
});

//show a single Blog
app.get("/showBlog/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = all_blogs.find((blog) => blog.id === id);
  res.render("show.ejs", { blog });
});

app.get("/blog/:id/edit", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = all_blogs.find((blog) => blog.id === id);
  res.render("edit.ejs", { blog });
});

// update blog
app.put("/updateBlog/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const index = all_blogs.findIndex((blog) => blog.id === id);
  all_blogs[index] = { id, title, content };
  res.redirect("/");
});

// delete blog
app.delete("/deleteBlog/:id", (req, res) => {
  const id = parseInt(req.params.id);
  all_blogs = all_blogs.filter((blog) => blog.id !== id);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running at port 3000.");
});
