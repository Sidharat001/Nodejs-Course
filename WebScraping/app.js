const express = require('express');
const cheerio = require('cheerio');  // This Package is used to get data from another server
const axios = require('axios');     // This Package is used to return DOM data 

const app = express();
let port = process.env.port || 3000;

/** Url From Where get Data */
let url = 'https://www.mindluster.com/'

/** load data from url */
axios.get(url).then((res) => {
    // console.log(res.data);
    let $ = cheerio.load(res.data);
    $('.course_category > .container > .row > .col-lg-3').each((el, i) => {
        console.log($(this).text());
        return false;
    })
}).catch((err) => {
    if(err) throw err;
});

app.listen(port, () => {
    console.log('listening on port ' + port);
});