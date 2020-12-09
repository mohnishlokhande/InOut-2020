const express = require('express');
var router = express.Router();
const regcontroller = require('../controller/datacontrol');

router.post('/register', regcontroller.register);


module.exports = router;