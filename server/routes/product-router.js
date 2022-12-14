const productRouter = require('express').Router()
const { getProduct, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/product-ctrl');

productRouter.get('/', getProduct);
productRouter.get('/byId/:id', getProductById);
productRouter.post('/add', addProduct);
productRouter.put('/update/:id', updateProduct);
productRouter.delete('/delete/:id', deleteProduct);

module.exports = productRouter;