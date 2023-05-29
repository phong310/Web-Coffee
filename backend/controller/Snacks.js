const snacksModel = require("../models/SnacksModel")

const SnacksController = {
    // create Snacks
    createSnacks: async (req, res) => {
        try {
            const newSnacks = {
                id: 6,
                img: "https://phuclong.com.vn/uploads/dish/b380798cdac374-traicaytuoisaydeo.png",
                price: 35000,
                title: "Trái Cây Xấy",
            }
            const Snack = new snacksModel(newSnacks);
            await Snack.save();
            res.status(200).json(Snack)
        } catch (e) {
            res.status(500).json({ err: e })
        }
    },

    // get all snacks
    getAllSnacks: async (req, res) => {
        try {
            const snacks = await snacksModel.find();
            res.status(200).json(snacks)
        } catch (e) {
            res.status(500).json({ err: e })
        }
    },

    // Search
    searchSnack: async (req, res) => {
        try {
            const title = req.query.title;
            const Snacks = await snacksModel.find({ title: new RegExp(title, "i") });
            res.status(200).json(Snacks);
        } catch (e) {
            res.status(500).json({ err: e });
        }
    }
}

module.exports = SnacksController