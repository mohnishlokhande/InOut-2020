const bcrypt = require('bcrypt')    // for hashing passwords
var bodyParser = require('body-parser')
var express=require("express");
var connection = require('../mysql');

module.exports.register = async (req,res) =>{
    // var today = new Date();
    //var encryptedString = cryptr.encrypt(req.body.password);
  //console.log(req.body.name);
    const hashedPass = await bcrypt.hash(req.body.password, 10) //async function returning hashed password to be stored in database
    var user={
        "username":req.body.username,
        "email":req.body.email,
        "password":hashedPass,
        "contact" : req.body.contact
        
    }
    connection.query('INSERT INTO user SET ?',user,  (error, results, fields) => {
      if (error) {
        res.json({
            message:'there are some error with query'
        }) 
      }
      else{
        res.json({
          "username": req.body.username,
          "email": req.body.email,
          "contact": req.body.contact,
          message:'user registered sucessfully'
          })
      }
    });
}

