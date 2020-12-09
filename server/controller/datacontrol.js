const bcrypt = require('bcrypt')    // for hashing passwords
var express= require("express");
var connection = require('../mysql');
 
module.exports.register= async(req,res) => {
  console.log(req.body);
  
  const { name, email, password, contact} =req.body;
    // var today = new Date();
    connection.query('SELECT email FROM Registerdetails WHERE email = ?',[email],  async(error, results) => {
      if (error) {
          res.send('there are some error with query')
      }
      if(results.length >0){
           return res.render('register', {
             message : 'Email already registered'
           })
        }  

        const hashedPass = await bcrypt.hash(password, 8) //async function returning hashed password to be stored in database
       console.log(hashedPass);
      //  res.send("registered");
    connection.query('INSERT INTO Registerdetails SET ?',{username: name, email: email,contact: contact, password: hashedPass},  (error, results)=> {
    
      if (error) {
        res.send('there are some error with query')
      }
      else{
          console.log(results);
          return res.render('register', {
            message : 'User Registered successfully'
          })
      }
    });
});
    

}
