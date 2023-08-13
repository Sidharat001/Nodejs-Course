const express = require('express');
const path = require('path');
const fs = require('fs');
const url = require('./route/web.js');
const app = express();

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', url);
app.listen(process.env.port || 3000 , () => {
    console.log(`Server listening on http://localhost:${process.env.port || 3000}`);
});
