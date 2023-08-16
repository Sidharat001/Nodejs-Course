const environment = require('dotenv');
environment.config({path: './.env'})
const express = require('express');
const mongoose = require('mongoose');
const route = require('./routes/web');
const dbconfig = require('./databaseConfig/config');
const databaseConfig = require('./databaseConfig/config');
require('./module/UserModel');

const app = express();
const port = process.env.port;
const DataBase_url = process.env.DataBase_URL;

// create routes with port 
app.use('/', route).listen(port)
dbconfig(DataBase_url)