const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const shopRoutes = require("./routes/shop");
const adminData = require("./routes/admin");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { docTitle: "Page not found" });
});

app.listen(3030);
