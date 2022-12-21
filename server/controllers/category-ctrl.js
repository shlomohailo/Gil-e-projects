const categoryModel = require('../models/model-category');

const getCategory = async (req, res) => {
    await categoryModel.find({}).populate("subCategory")
        .then((category, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (category.length == 0) {
                return res.json({ success: false, message: "No category available" })
            }
            res.status(200).json({ success: true, category })
        })
};

const getCategoryById = async (req, res) => {
    await categoryModel.findById(req.params.id)
        .then(category => {
            if (!category) {
                return res.json({ success: false, massage: "No category available" })
            }
            return res.status(200).json({ success: true, category })
        })
        .catch(error => res.status(400).json({ success: false, error }))
};

const addCategory = async (req, res) => {
    await categoryModel.insertMany(req.body.category)
        .then((result) => {
            return res.status(200).json({ successes: true, result })
        }).catch(error => res.status(400).json({ successes: false, error }))
};

const updateCategory = async (req, res) => {
    await categoryModel.findByIdAndUpdate(req.params.id, req.body.category)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
};

const deleteCategory = async (req, res) => {
    await categoryModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
};

module.exports = { getCategory, getCategoryById, addCategory, updateCategory, deleteCategory }