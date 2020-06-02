const express = require("express");
const router = express.Router();

//upload Routes
const userRoutes = require("./user.routes");
const productRoutes = require("./product.routes");

//config routes
router.use("/user", userRoutes);
router.use("/product", productRoutes);

module.exports = router;
