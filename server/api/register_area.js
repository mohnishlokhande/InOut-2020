const express = require('express');
var router = express.Router();
var con = require('../mysql');

router.post('/register_seller', (req, res) => {
    


    var seller = {
        "seller_name": req.body.seller_name,
        "park_name": req.body.park_name,
        "contact": req.body.contact,
        "park_add": req.body.park_add,
        "capacity": req.body.capacity,
        "price": req.body.price,
        "description" : req.body.description
    }
    
    
    
    connection.query('INSERT INTO parking_area SET ?', seller, (error, results, fields) => {
        if (error) {
            res.json({
                message: 'there are some error with query'
            })
        } else {
            res.json({
                "message": "seller registererd successfully"
            })
        }
    })
})