const usersRouter = require('express').Router()
const { getUsers, getUserById, addUser, updateUser, deleteUser } = require('../controllers/user-ctrl');

usersRouter.get('/', getUsers);
usersRouter.get('/byId/:id', getUserById);
usersRouter.post('/add', addUser);
usersRouter.put('/update/:id', updateUser);
usersRouter.delete('/delete/:id', deleteUser);

module.exports = usersRouter