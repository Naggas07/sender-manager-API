const express = require("express");
const router = express.Router();

// Controllers
const providerController = require("../controllers/providers/provider.controller");
const contactProviderController = require("../controllers/providers/contactProvider.controller");
const channelProviderController = require("../controllers/providers/channelProvider.controller");

//GlobalProvider

router.post("/new", providerController.newProvider);
router.post("/list", providerController.getFilter);
router.post("/listInfo", providerController.getFilterInfo);

//Contact Provider
router.post("/contact", contactProviderController.newContact);

//Channel Provider
router.post("/channel", channelProviderController.newChannel);

module.exports = router;
