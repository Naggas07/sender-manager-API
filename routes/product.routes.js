const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.post("/new", productController.create);
router.get("/list", productController.getAll);
router.put("/update/:id", productController.update);

module.exports = router;
