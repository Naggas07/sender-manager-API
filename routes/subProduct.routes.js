const express = require("express");
const router = express.Router();

const subProductController = require("../controllers/subProductController");

router.post("/new", subProductController.create);

module.exports = router;
