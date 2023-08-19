const express = require('express');
const HomeController = require('../controller/HomeController')

const route = express.Router();
const HomeHandler = new HomeController();

route.get('/', HomeHandler.index)
route.get('/home', HomeHandler.index)
route.post('/addUser', HomeHandler.create);
route.put('/update/:id{([0-9])}', HomeHandler.update);
route.get('/delete/:id', HomeHandler.delete);
route.get('/delete/:view', HomeHandler.index);


module.exports = route;