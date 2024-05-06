const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./Routes/article");
const Article = require("./models/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog_webiste");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/articles", articleRouter);

app.get("/", async (req, res) => {
  const Articles = await Article.find().sort({
    createdAt: "desc",
  });
  res.render("articles/index", { articles: Articles });
});
app.listen(3000, () => {
  console.log("server is running");
});
