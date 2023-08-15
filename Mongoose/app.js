const environment = require('dotenv');
environment.config({path: './.env'})
const express = require('express');
const mongoose = require('mongoose');
const databaseConfig = require('./DatabaseConfig/config')


const app = express();
const port = process.env.port;
const mongodbUri = process.env.DATABASE_URL;
const config = new databaseConfig(mongodbUri);

app.get('/', (req, res) => {
    res.send(`Welcome to http://localhost:${port} Created by ${process.env.UserAgent}`);
}).listen(port, (err , req, res) => {
    if(err) throw err;
    else{
        console.log(`see http://localhost:${port}`)
    }
});