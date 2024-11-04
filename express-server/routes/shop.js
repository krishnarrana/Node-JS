const path = require("path");
const rootDir = require("../util/path");
const express = require("express");

const adminData = require("./admin.js");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Admin data", adminData.products);

  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
});

module.exports = router;
