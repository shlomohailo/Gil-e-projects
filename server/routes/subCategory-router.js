const subCategoryRouter = require('express').Router()
const { getSubCategory, getSubCategoryById, addSubCategory, updateSubCategory, deleteSubCategory } = require('../controllers/subCategory-ctrl');

subCategoryRouter.get('/', getSubCategory);
subCategoryRouter.get('/byId/:id', getSubCategoryById);
subCategoryRouter.post('/add', addSubCategory);
subCategoryRouter.put('/update/:id', updateSubCategory);
subCategoryRouter.delete('/delete/:id', deleteSubCategory);

module.exports = subCategoryRouter;