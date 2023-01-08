const userRouter = require('express').Router();
const userController = require('../controllers/user_controller');

userRouter.get('/', userController.getDefaultUserHandler);

module.exports = userRouter;