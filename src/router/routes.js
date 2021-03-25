const express = require('express');
const helloController = require('../controllers/helloController');
const tokenController = require('../controllers/tokenController');
const userController = require('../controllers/userController');

const routes = express.Router();

// # Hello Action
routes.get('/', helloController.index);

// # User Actions
routes.get('/user', userController.index);
routes.get('/user/:id', userController.show);

// # Token Action
routes.post('/token', tokenController.index);

module.exports = {
  routes
}