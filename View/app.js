const express = require('express'); 
const WebRoute = require('./route/web.js');
const port = process.env.port || 8080;

const app = express();

app.use('/', WebRoute);

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});