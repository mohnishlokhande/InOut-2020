var cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');
 
module.exports.register=(req,res) => {
    var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.send('there are some error with query')
      }else{
          res.send('user registered sucessfully')
      }
    });
    
}
