const express = require('express');
var router = express.Router();
const regcontroller = require('../controller/regcontrol');

router.post('/register', regcontroller.register);


module.exports = router;