const express = require("express");
const router = express.Router();

const base = require("../controllers/user.controller");

router.get("/", base.base);

module.exports = router;
