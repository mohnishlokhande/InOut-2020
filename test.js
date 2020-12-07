const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Amit@123',
  database: 'girrafe'
});
connection.connect((err) => {
    if (err)  
    {
        console.log("connection failed !");
        return 
    }

    return console.log("connected !")

});