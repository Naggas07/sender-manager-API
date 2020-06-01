const express = require("express");
const router = express.Router();

//upload Routes
const userRoutes = require("./user.routes");

//config routes
router.use("/user", userRoutes);

module.exports = router;
