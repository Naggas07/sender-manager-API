const express = require("express");
const router = express.Router();

//middlewares
const authMiddleware = require("../middlewares/auth.middleware");

//Controllers
const userController = require("../controllers/user.controller");

router.post("/new", authMiddleware.isAuthenticated, userController.create);
router.post("/login", authMiddleware.isNotAuthenticated, userController.login);
router.post("/logout", authMiddleware.isAuthenticated, userController.logout);
router.put(
  "/update/:id",
  authMiddleware.isAuthenticated,
  userController.updateUser
);

module.exports = router;
