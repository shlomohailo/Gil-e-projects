const orderModel = require('../models/model-order');

const getOrder = async (req, res) => {
    await orderModel.find({})
        .then((order, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (order.length == 0) {
                return res.json({ success: false, message: "No order available" })
            }
            res.status(200).json({ success: true, order })
        })
};

const getOrderById = async (req, res) => {
    await orderModel.findById(req.params.id)
        .then(order => {
            if (!order) {
                return res.json({ success: false, massage: "No order available" })
            }
            return res.status(200).json({ success: true, order })
        })
        .catch(error => res.status(400).json({ success: false, error }))
};

const addOrder = async (req, res) => {
    await orderModel.insertMany(req.body.order)
        .then((result) => {
            return res.status(200).json({ successes: true, result })
        }).catch(error => res.status(400).json({ successes: false, error }))
};

const updateOrder = async (req, res) => {
    await orderModel.findByIdAndUpdate(req.params.id, req.body.order)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
};

const deleteOrder = async (req, res) => {
    await orderModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
};

module.exports = { getOrder, getOrderById, addOrder, updateOrder, deleteOrder }