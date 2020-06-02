const express = require("express");
const router = express.Router();

//upload Routes
const userRoutes = require("./user.routes");
const productRoutes = require("./product.routes");
const subProductRoutes = require("./subProduct.routes");

//config routes
router.use("/user", userRoutes);
router.use("/product", productRoutes);
router.use("/subProduct", subProductRoutes);

module.exports = router;
