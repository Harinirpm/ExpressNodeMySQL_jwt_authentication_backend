const express = require("express");
const userController = require("../controller/userController");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/getAllUsers",auth,userController.getUsers);
router.delete("/:id",auth,userController.deleteUser);
module.exports = router;