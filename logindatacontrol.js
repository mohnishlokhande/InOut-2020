const express = require('express')
const bcrypt = require('bcrypt')    // for hashing passwords
// cryptr = new cryptr('myTotalSecretKey');
var con = require('mysql');

module.exports.authenticate = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    if (username && password) {
        con.query('SELECT * FROM Registerdetails WHERE email = ?',[email], function (error, results, fields) {
            if (error) {
                res.send('there are some error with query')
            }else{             
              if(results.length >0){
        decryptedString = cryptr.decrypt(results[0].password);
                  if(password==decryptedString){
                      res.send('successfully authenticated')
                  }else{
                      res.send("Email and password does not match");
                  }
                
              }
              else{
                res.send("Email does not exits");
              }
            }
          });
      
        }
    }
