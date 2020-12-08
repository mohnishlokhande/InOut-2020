var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "mysql-16437-0.cloudclusters.net",
    user: "inout",
    password: "inout2020",
    port: '16437',
    database : 'inout2020'
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
