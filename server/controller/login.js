// const bcrypt = require('bcrypt')    // for hashing passwords
var Cryptr = require('cryptr');
cryptr = new Cryptr('myTotalySecretKey');
var connection = require('../mysql');
module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;
   
   
    connection.query('SELECT * FROM Registerdetails WHERE email = ?',[email], function (error, results) {
      if (error) {
          res.json({
            message:'there are some error with query'
            })
      }else{
       
        if(results.length >0){
  decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
                res.json({
                    message:'successfully authenticated'
                })
            }else{
                res.json({
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({  
            message:"Email does not exits"
          });
        }
      }
    });
}




