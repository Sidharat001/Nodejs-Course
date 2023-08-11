/** Import Express by Both Method */
import express from 'express';
// const express = reqire('express');

/** Execuute of express */
const app = express();

/** get port number from .env otherwise 3000 get defualt */
const port = process.env.port || 3000;

/** Create Routing  */
app.get('/', (req, res) => {
    res.send(`<h2>Welcome To Home Page</h2>`)
})

// app.route() used for aviod dublicate route name
app.route('/routerName').all((req,res) => {
    // statement Code
    res.send('Hello Suraj')
})

// Call More Than one Callback Function By Using Next() function 
app.get('/CallCallback', (req,res,next) => {
    console.log('FirstCallback')
    next()
}, (req,res) => {
    console.log(`Second CallBack`)
})

// Create Array CallBack Function
const FirstCallback = (req,res,next) => {
    res.send('First Callback Function')
    next();
}

const SecondCallback = (req,res,next) => {
    console.log('Second CallBack')
    next();
}

const ThirdCallBack = (req,res,next) => {
    console.log('Third Call Back')
}
app.get('/arrayCallback', [FirstCallback, SecondCallback, ThirdCallBack])

// Page Not Found Route Create by *
app.get('*', (req,res) => {
    const ErrorCode = 404
    res.send(`Page Not Found Error Code ${ErrorCode}`)
})

/** Create Nodejs Server */
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});