const express = require('express');

const appUri = express.Router();

appUri.get('/', (req,res) => {
    res.send(`Welcome To Our Company DigitalOcean`);
});

module.exports = appUri;