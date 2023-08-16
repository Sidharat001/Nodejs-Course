const express = require('express');
const web = require('./route/web');


const app = express(); 
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.get('/', web).listen(port, () => console.log(`See http://localhost:${port}`));
