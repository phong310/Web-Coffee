const router = require("express").Router();
const SnacksController = require("../controller/Snacks");

router.post("/createSnack", SnacksController.createSnacks);

router.get("/getAllSnack", SnacksController.getAllSnacks)

module.exports = router