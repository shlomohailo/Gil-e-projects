const subCategoryModel = require('../models/model-subCategory');

const getSubCategory = async (req, res) => {
    await subCategoryModel.find({})
        .then((subCategory, error) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            }
            if (subCategory.length == 0) {
                return res.json({ success: false, message: "No subCategory available" })
            }
            res.status(200).json({ success: true, subCategory })
        })
};

const getSubCategoryById = async (req, res) => {
    await subCategoryModel.findById(req.params.id)
        .then(subCategory => {
            if (!subCategory) {
                return res.json({ success: false, massage: "No subCategory available" })
            }
            return res.status(200).json({ success: true, subCategory })
        })
        .catch(error => res.status(400).json({ success: false, error }))
};

const addSubCategory = async (req, res) => {
    await subCategoryModel.insertMany(req.body.subCategory)
        .then((result) => {
            return res.status(200).json({ successes: true, result })
        }).catch(error => res.status(400).json({ successes: false, error }))
};

const updateSubCategory = async (req, res) => {
    await subCategoryModel.findByIdAndUpdate(req.params.id, req.body.subCategory)
        .then(result => res.status(200).json({ success: true, result }))
        .catch(error => res.status(400).json({ success: false, error }))
};

const deleteSubCategory = async (req, res) => {
    await subCategoryModel.findByIdAndDelete(req.params.id)
        .then(() => res.status(300).json({ success: true }))
        .catch(error => res.status(400).json({ success: false, error }))
};

module.exports = { getSubCategory, getSubCategoryById, addSubCategory, updateSubCategory, deleteSubCategory }