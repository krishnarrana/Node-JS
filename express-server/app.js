const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});
app.use((req, res, next) => {
  console.log("Middleware 2");
  res.write("<body><h1>Hello World!</h1></body>");
  next();
});

app.listen(3030);
