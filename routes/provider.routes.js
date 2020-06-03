const express = require("express");
const router = express.Router();

// Controllers
const providerController = require("../controllers/providers/provider.controller");
const contactProviderController = require("../controllers/providers/contactProvider.controller");

//GlobalProvider

router.post("/new", providerController.newProvider);
router.post("/list", providerController.getFilter);
router.post("/listInfo", providerController.getFilterInfo);

//Contact Provider
router.post("/contact", contactProviderController.newContact);

module.exports = router;
