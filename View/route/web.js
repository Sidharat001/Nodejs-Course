const express = require('express');
const RootController = require('../controller/HomeController.js');
const Router = express.Router();

const Root = new RootController();

Router.get('/', Root.Root);
Router.get('/home', Root.Root);
Router.get('/about', Root.About);

module.exports = Router