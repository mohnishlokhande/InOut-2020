const express = require('express');
var router = express.Router();
var get_avail = require('./get_avail')




router.use('/get_avail', get_avail);



module.exports = router;