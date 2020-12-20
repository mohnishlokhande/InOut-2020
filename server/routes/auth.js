const express = require('express');
var router = express.Router();
const regcontroller = require('../controller/regcontrol');
const logincontrol = require('../controller/login');
const parkcontroller = require('../controller/seller');

router.post('/register', regcontroller.register);
router.post('/login', logincontrol.authenticate);
router.post('/parkreg', parkcontroller.parkreg);

module.exports = router;