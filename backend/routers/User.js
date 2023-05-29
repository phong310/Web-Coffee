const router = require("express").Router();

const UserController = require("../controller/User");

router.get("/getAllUser", UserController.getAllUser);

router.post("/createUser", UserController.createUser);

module.exports = router;