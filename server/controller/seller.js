const bcrypt = require('bcrypt')    // for hashing passwords
var bodyParser = require('body-parser')
var express=require("express");
var connection = require('../mysql');

module.exports.plotregister = async (req,res) =>{
    // var today = new Date();
    //var encryptedString = cryptr.encrypt(req.body.password);
  //console.log(req.body.name);
    // const hashedPass = await bcrypt.hash(req.body.password, 10) //async function returning hashed password to be stored in database
    var seller={
        "sellername":req.body.name,
        "email":req.body.email,
        "parkname" : req.body.parkname,
        // "password":hashedPass,
        "contact" : req.body.contact
        
    }
    connection.query('INSERT INTO sellers SET ?',seller,  (error, results, fields) => {
      if (error) {
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

