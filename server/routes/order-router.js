const orderRouter = require('express').Router()
const { getOrder, getOrderById, addOrder, updateOrder, deleteOrder } = require('../controllers/order-ctrl');

orderRouter.get('/', getOrder);
orderRouter.get('/byId/:id', getOrderById);
orderRouter.post('/add', addOrder);
orderRouter.put('/update/:id', updateOrder);
orderRouter.delete('/delete/:id', deleteOrder);

module.exports = orderRouter;