const OrderModel = require("../models/OrderModel")

const OrderController = {
    // get all order
    getAllOrder: async (req, res) => {
        try {
            const user = await OrderModel.find();
            res.status(200).json(user)
        }
        catch (e) {
            res.status(500).json({ err: e })
        }
    },

    // create, add order
    createOrder: async (req, res) => {
        try {
            const newOrder = {
                order_id: req.body.order_id,
                order_products: req.body.order_products,
                customer_name: req.body.customer_name,
                customer_phone: req.body.customer_phone,
                customer_address: req.body.customer_address,
                order_pay: req.body.order_pay,
                order_description: req.body.order_description,
                order_status: req.body.order_status

            };
            const user = new OrderModel(newOrder);
            await user.save();
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json({ err: e })
            console.log(res)
        }
    }
}

module.exports = OrderController