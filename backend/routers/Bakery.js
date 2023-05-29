const router = require("express").Router();
const BakeryController = require("../controller/Bakery");

router.post("/createBakery", BakeryController.createBakery);

router.get("/getAllBakery", BakeryController.getAllBakery);

router.get("/search", BakeryController.searchBakery);

module.exports = router