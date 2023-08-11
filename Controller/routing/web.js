const express = require('express');
const {myprofile} = require('../controller/profileController.js');
const app = express.Router();

app.get('/', (req,res) => {
    res.send(`This is root page`);
});

app.use('/myprofile/:id([0-9]{2})', myprofile);

module.exports = app  