const bakeryModel = require("../models/BakeryModel");

const BakeryController = {
    // create bakery
    createBakery: async (req, res) => {
        try {
            const newBakery = {
                id: 6,
                img: "https://phuclong.com.vn/uploads/dish/01b9696b860549-banhphap_0000s_0001_buttercroissant.jpg",
                price: 19056,
                title: "Butter Croissant",
            }
            const Bakery = new bakeryModel(newBakery);
            await Bakery.save();
            res.status(200).json(Bakery)

        } catch (e) {
            res.status(500).json({ err: e })
        }
    },

    // Get all bakery
    getAllBakery: async (req, res) => {
        try {
            const Bakery = await bakeryModel.find();
            res.status(200).json(Bakery)
        }
        catch (e) {
            res.status(500).json({ err: e })
        }
    }
}

module.exports = BakeryController