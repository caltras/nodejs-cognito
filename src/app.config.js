
var session = require('express-session')
const path = require('path');
var bodyParser = require('body-parser');
const config = require('./config');
const express = require('express');

module.exports = (app) =>{
    app.use(session(config.session));
    
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'view'));
    
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use(express.static(path.join(__dirname, 'public')));
};