const express = require('express');
const UserService = require('../controller/User.Controller');

// get access to router methods
const router = express.Router();

// defualt routes
router.get('/', (req,res) => {
    res.render('index', {"title": "Home"});
});

// login view routes
router.get('/login', (req, res) => {
    res.render('login', {"title": "Login"});
});

// login login view routes
router.post('/login', (req, res) => {
    res.send('Okay');
});

// register view routes
router.get('/sign-in', (req, res) => {
    res.render('register', {"title": "sign-in"});
});

// register login view routes
router.post('/sign-in', UserService.registerUser);

router.get('/admin', (req, res) => {
    res.render('admin/home', {title: 'Dashboard'});
});



module.exports = router;