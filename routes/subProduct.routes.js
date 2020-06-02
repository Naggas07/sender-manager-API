const express = require("express");
const router = express.Router();

const subProductController = require("../controllers/subProductController");

router.post("/new", subProductController.create);
router.get("/list", subProductController.getAll);
router.get("/list/:product", subProductController.getAllProduct);
router.post("/list", subProductController.getState);

module.exports = router;
