const productModel = require('../models/model-products');

const getProduct = async (req, res) => {
    await productModel.find({})
        .then((product, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (product.length == 0) {
                return res.json({ success: false, message: "No product available" })
            }
            res.status(200).json({ success: true, product })
        })
};

const getProductById = async (req, res) => {
    await productModel.findById(req.params.id)
        .then(product => {
            if (!product) {
                return res.json({ success: false, massage: "No product available" })
            }
            return res.status(200).json({ success: true, product })
        })
        .catch(error => res.status(400).json({ success: false, error }))
};

const addProduct = async (req, res) => {
    await productModel.insertMany(req.body.product)
        .then((result) => {
            return res.status(200).json({ successes: true, result })
        }).catch(error => res.status(400).json({ successes: false, error }))
};

const updateProduct = async (req, res) => {
    await productModel.findByIdAndUpdate(req.params.id, req.body.product)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
};

const deleteProduct = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
};

module.exports = { getProduct, getProductById, addProduct, updateProduct, deleteProduct }