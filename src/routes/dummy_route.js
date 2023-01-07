const dummyRouter = require('express').Router();
const dummyController = require('../controllers/dummy_controller');

dummyRouter.get('/', dummyController.getDummyHandler);

module.exports = dummyRouter;