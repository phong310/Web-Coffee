const UserModel = require("../models/UserModel")

const UserController = {
    // get all user
    getAllUser: async (req, res) => {
        try {
            const user = await UserModel.find();
            res.status(200).json(user)
        }
        catch (e) {
            res.status(500).json({ err: e })
        }
    },

    // create user (register)
    createUser: async (req, res) => {
        try {
            const newUser = {
                id: 1,
                username: "user310",
                password: "123456a"
            };
            const user = new UserModel(newUser);
            await user.save();
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json({ err: e })
        }
    }
}

module.exports = UserController