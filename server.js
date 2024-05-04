const express = require("express");
const articleRouter = require("./Routes/article");
const app = express();

app.set("view engine", "ejs");

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
  res.render("index", { articles: Articles });
});
app.listen(3000, () => {
  console.log("server is running");
});
