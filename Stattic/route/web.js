const express = require('express');
const Root = require('../controller/RootController');

const defaultRoute = new Root();

const Router = express.Router();

Router.get('/', defaultRoute.Root)

module.exports = Router;