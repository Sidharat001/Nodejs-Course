const express = require('express');
const web = require('./route/web');
const path = require('path');
const app = express();

// app.use(express.static('public')) // Its Working 
let options = {
    dotfile: 'ignore',
    etag : false,
    extensions: ['html', 'json', 'htm'],
    index : false,
    redirect :  false,
    setHeaders : function(req, res, status) {
        // res.set('Content-Type', 'application/json');
        req.set('x-timestamp', Date.now());
    },
}
app.use(express.static(path.join(process.cwd(), 'public'), options));

app.use('/', web);

app.listen(8080, () => {
    console.log(`server listening on ${8080}`);
})