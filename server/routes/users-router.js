const usersRouter = require('express').Router()
const { login, register } = require('../controllers/user-ctrl');


usersRouter.post('/register', register);
usersRouter.post('/login', login);




module.exports = usersRouter