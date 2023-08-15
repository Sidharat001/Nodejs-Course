const express = require('express');
const HomeController = require('../controller/HomeController');

const url = express.Router();
const renderHome = new HomeController();
url.get('/', renderHome.rootFunction);

module.exports = url;