const express = require("express");
const router = express.Router();

//middlewares
const authMiddleware = require("../middlewares/auth.middleware");

//upload Routes
const userRoutes = require("./user.routes");
const productRoutes = require("./product.routes");
const subProductRoutes = require("./subProduct.routes");

//config routes
router.use("/user", userRoutes);
router.use("/product", authMiddleware.isAuthenticated, productRoutes);
router.use("/subProduct", authMiddleware.isAuthenticated, subProductRoutes);

module.exports = router;
