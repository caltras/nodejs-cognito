var express = require('express');
var router = express.Router();

var authController = require('./auth.controller');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/authenticate', authController.token);
router.post('/validate', authController.validateToken);

module.exports = router;