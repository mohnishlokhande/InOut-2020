const express = require('express');
var router = express.Router();
const regcontroller = require('../controller/regcontrol');
const logincontrol = require('../controller/login');

router.post('/register', regcontroller.register);
router.post('/login', logincontrol.authenticate);


module.exports = router;