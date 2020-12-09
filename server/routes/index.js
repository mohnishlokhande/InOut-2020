const express = require('express');
var router = express.Router();

//define routes here

//home
router.get('/', (req, res) => {
    res.render('index.ejs');
});

//register
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

//login
router.get('/login', (req, res) => {
    res.render('login.ejs');
});


module.exports = router;