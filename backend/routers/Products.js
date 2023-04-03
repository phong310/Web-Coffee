const router = require("express").Router();
const ProductController = require("../controller/Products")

router.post("/createProducts", ProductController.createProducts);

router.get("/getAllproducts", ProductController.getAllProducts)

router.get("/search", ProductController.searchDrinks)

module.exports = router;