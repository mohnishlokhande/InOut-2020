const express = require('express');
var router = express.Router();
var get_avail = require('./get_avail')
var booking = require('./booking')




router.use('/get_avail', get_avail);
router.use('/booking', booking);



module.exports = router;