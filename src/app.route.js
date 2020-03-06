var express = require('express');
var router = express.Router();
var authMiddleware = require('./auth/auth.middleware');

router.get('/', (req, res) => {
    res.send('Hello Nodejs + Cognito');
});

router.get('/dashboard', authMiddleware.validateToken, (req, res) => {
    res.send('Authentitcate');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

module.exports = router;