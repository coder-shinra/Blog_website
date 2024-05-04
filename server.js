const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./Routes/article");
const app = express();

mongoose.connect("mongodb://localhost/blog_webiste");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const Articles = [
    {
      title: "test Article",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "test Article",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "test Article",
      createdAt: new Date(),
      description: "test description",
    },
    {
      title: "test Article",
      createdAt: new Date(),
      description: "test description",
    },
  ];
  res.render("articles/index", { articles: Articles });
});
app.listen(3000, () => {
  console.log("server is running");
});
