const express = require('express');
const defualtRoute = require('./routing/web.js');
const app = express();
const port = process.env.port || 8080;

app.get('/', function (req, res) {
    res.send('Welcome to the Google Cloud Platform API service ');
})

app.use('/home', defualtRoute);

app.listen(port, () => {
    if (port !== undefined)
        console.log('Server Runing on http://localhost: ' + port);
    else
        res.status(400).send(`Page not found: ${port}`);
});