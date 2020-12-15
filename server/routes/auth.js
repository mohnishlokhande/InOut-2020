const express = require('express');
var router = express.Router();
const regcontroller = require('../controller/regcontrol');
const logincontrol = require('../controller/login');
const { plotregister } = require('../controller/seller');

router.post('/register', regcontroller.register);
router.post('/login', logincontrol.authenticate);
router.post('/parkreg', plotregister);

module.exports = router;