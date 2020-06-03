const express = require("express");
const router = express.Router();

// Controllers
const providerController = require("../controllers/providers/provider.controller");

router.post("/new", providerController.newProvider);
router.post("/list", providerController.getFilter);

module.exports = router;
