// const bcrypt = require('bcrypt')    // for hashing passwords
var Cryptr = require('cryptr');
var express=require("express");
var connection = require('../mysql');

module.exports.register=async(req,res) =>{
    // var today = new Date();
    var encryptedString = cryptr.encrypt(req.body.password);
    // const hashedPass = await bcrypt.hash(password, 8) //async function returning hashed password to be stored in database
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        // "contact" : req.body.contact
        
    }
    connection.query('INSERT INTO Registerdetails SET ?',users,  (error, results, fields) => {
      if (error) {
        res.json({
            message:'there are some error with query'
        })
      }else{
          res.json({
            message:'user registered sucessfully'
        })
      }
    });
}

