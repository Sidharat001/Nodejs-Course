const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'secretKey';

// load normal routes
app.get('/api/', (req, res) => {
    res.json({
        message: 'Defualt Api Call',
        status: 200
    })
});

// jsonwebtoken api authorization
app.post('/api/login', (req, res) => {
    let user = {
        id: 1,
        name: 'John',
        age: 36
    }
    jwt.sign({ user: user }, secretKey, { expiresIn: '300s' }, (err, token) => {
        res.json({
            message: 'Token is valid',
            token: token
        })
    })
});

// verify that the token is valid
app.get('/api/dashboard', verifyToken, (req, res) => {
    if(req.token && req.token !== 'undefined'){
        jwt.verify(req.token, secretKey, (err, result) => {
            if (!err) {
                res.json({
                    message: "DashBoard Access Success",
                    status: 200,
                })
            }else{
                return res.json({
                    message: 'Invalid Token',
                    status: 403,
                })
            }
        });
    }else{
        res.json({
            message: 'Token is required',
            status: 404,
        })
    }
})

// middleware for checking token validity
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (typeof (bearerHeader) !== 'undefined') {
        const bearerToken = bearerHeader.split(' ');
        const token = bearerToken[0];
        req.token = token;
        next();
    } else {
        return res.json({
            message: "Token is invalid",
            status: 403,
        })
    }
}

// load port from config
app.listen(3000, () => {
    console.log('listening on port 3000');
});