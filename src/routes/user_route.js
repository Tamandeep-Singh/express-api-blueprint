const userRouter = require('express').Router();
const userController = require('../controllers/user_controller');

userRouter.get('/', userController.getAllUsers);
userRouter.post('/add', userController.addUser);

module.exports = userRouter;