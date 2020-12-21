const express = require('express');
const bcrypt = require('bcrypt')    // for hashing passwords
//var Cryptr = require('cryptr');

var connection = require('../mysql');
module.exports.authenticate = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
   
   
  connection.query('SELECT * FROM users WHERE email = ?', [email], async function (error, results) {
    if (error) {
      res.json({
        message: 'there are some error with query'
      })
    } else {
       
      if (results.length > 0) {
        if (await bcrypt.compare(req.body.password, results[0].password)) {
          //decryptedString = cryptr.decrypt(results[0].password);
          //if(password==decryptedString){
          res.json({
            username: results[0].username,
            email: results[0].email,
            message: 'successfully authenticated'
          })
        } else {
          res.send({
            message: "Username and password does not match"
          });
        }
          
      }
      else {
        res.send({
          message: "User does not exits"
        });
      }
    }
  });
};




