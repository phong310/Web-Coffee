const productModel = require("../models/ProductsModel");

const ProductController = {
    // create products
    createProducts: async (req, res) => {
        try {
            const newProducts = {
                id: 6,
                img: "https://phuclong.com.vn/uploads/dish/dae727e03e8092-daccam.png",
                price: 68000,
                title: "Hồng Trà Đắc Cam",
            };
            const Products = new productModel(newProducts);
            await Products.save();
            res.status(200).json(Products)
        }
        catch (e) {
            res.status(500).json({ err: e })
        }
    },

    // get all products
    getAllProducts: async (req, res) => {
        try {
            const products = await productModel.find();
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json({ err: e })
        }
    },

    // Search
    searchDrinks: async (req, res) => {
        try {
            const title = req.query.title;
            const Drinks = await productModel.find({ title: new RegExp(title, "i") });
            res.status(200).json(Drinks);
        } catch (e) {
            res.status(500).json({ err: e });
        }
    }

}

module.exports = ProductController;