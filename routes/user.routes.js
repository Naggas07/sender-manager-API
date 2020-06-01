const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/new", userController.create);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.put("/update/:id", userController.updateUser);

module.exports = router;
