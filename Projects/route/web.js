const express = require('express');
const HomeController = require('../controller/HomeController');

const Home = new HomeController();
const url = express.Router();

url.get('/', Home.index);

module.exports = url


