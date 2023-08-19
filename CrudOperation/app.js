const environment = require('dotenv');
environment.config({path: './.env'});
const express = require('express');
const path = require('path');
const webroutes = require('./routes/web');
const Database = require('./database/config');

const app = express();
const port = process.env.Port;
const mondbUrl = process.env.MONDB_URL
const database = new Database(mondbUrl);

// for getting form data 
app.use(express.urlencoded({ extended : false }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/', webroutes).listen(3000, () => console.log('Application Connected'));
