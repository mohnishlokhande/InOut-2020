const bcrypt = require('bcrypt')    // for hashing passwords
var express= require("express");
var connection = require('./../config');
 
module.exports.register=(req,res) => {
    var today = new Date();
    const hashedPass = await bcrypt.hash(req.body.password, 10) //async function returning hashed password to be stored in database
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":hashedPass,
        "created_at":today,
    }
    connection.query('INSERT INTO Registerdetails SET ?',users, function (error, results, fields) {
      if (error) {
        res.send('there are some error with query')
      }else{
          res.send('user registered sucessfully')
      }
    });

}
