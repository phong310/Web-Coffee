const mongoose = require("mongoose");

const BakerySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    img: String,
    price: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("bakeryModel", BakerySchema)