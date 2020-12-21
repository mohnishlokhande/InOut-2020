const bcrypt = require('bcrypt')    // for hashing passwords
var bodyParser = require('body-parser')
var express=require("express");
var connection = require('../mysql');

module.exports.parkreg = (req,res) =>{
    // var today = new Date();
    //var encryptedString = cryptr.encrypt(req.body.password);
  //console.log(req.body.name);
    // const hashedPass = await bcrypt.hash(req.body.password, 10) //async function returning hashed password to be stored in database
    var seller={
        "seller_name":req.body.sellername,
        "park_name":req.body.park_name,
        "contact" : req.body.mobileNo,
        // "password":hashedPass,
        "park_add" : req.body.address,
        "capacity" : req.body.num,
        "price" : req.body.rate,
        "description" : req.body.moreinfo,
        //"image" : req.body.image
        
    }
    connection.query('INSERT INTO parking_area SET ?',seller,  (error, results, fields) => {
      if (error) {
        console.log(error);

        res.json({
            message:'there are some error with query'
        }) 
      }
      else{
          res.json({
            message:'Parking lot registered sucessfully'
          })
      }
    });
}

