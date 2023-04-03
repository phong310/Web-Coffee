const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    username: {
        type: String,
        require: true,
        minlength: 6,
        maxlength: 20,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minlength: 6,
    }
}, { timestamps: true })

module.exports = mongoose.model("UserModel", userSchema)