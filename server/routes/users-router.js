const usersRouter = require('express').Router()
const { login, register,getUser } = require('../controllers/user-ctrl');

usersRouter.get('/',getUser)
usersRouter.post('/register', register);
usersRouter.post('/login', login);




module.exports = usersRouter;