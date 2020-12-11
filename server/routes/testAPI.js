const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send("API connected !!");
})

module.exports = router;