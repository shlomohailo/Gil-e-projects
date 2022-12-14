const categoryRouter = require('express').Router()
const { getCategory, getCategoryById, addCategory, updateCategory, deleteCategory } = require('../controllers/category-ctrl');

categoryRouter.get('/', getCategory);
categoryRouter.get('/byId/:id', getCategoryById);
categoryRouter.post('/add', addCategory);
categoryRouter.put('/update/:id', updateCategory);
categoryRouter.delete('/delete/:id', deleteCategory);

module.exports = categoryRouter;