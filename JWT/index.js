const express = require('express');
require('dotenv').config();
const path = require('path');
const pulicRouter = require('./routes/public.routes');
const bodyParser = require('body-parser');
const { DBconfig } = require('./config/dbconfig');

// create server instance
const app = express();
const PORT = process.env.PORT || 8080;

// conncet database connection
DBconfig(process.env.DATABASE_URL);

// serve static files
app.use(express.static(path.join(process.cwd(), 'public')));

// set view engine
app.set('view engine', 'ejs');

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

// create basic routes middleware
app.use('/', pulicRouter)

// run on port 2024
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});