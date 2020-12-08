var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    // port: '16437',
    // database : 'inout2020'
  });

  connection.connect((err) => {
    if (err)  
    {
        console.log("connection failed !");
        return 
    }
    return console.log("connected !");
});

module.exports = connection; 
