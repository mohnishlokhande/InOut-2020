const express = require('express');
const app = express();
const bcrypt = require('bcrypt')    // for hashing passwords
var routes = require('./routes/index'); //requre routes pbject
var bodyParser = require('body-parser')// require to handle http post
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));    //for accessing req.body.name
app.set('view-engine', 'ejs')    //setting view engine to ejs
app.use(cors());

// var users = []; //to mimic users in database
app.listen(process.env.port || 3001);       //starting server   

//mysql database
var con = require("./mysql");

//import routes from route/index.js
app.use('/', routes);

//creating test api
var testAPI = require('./routes/testAPI');
app.use('/testAPI', testAPI);

app.use('/auth', require('./routes/auth'))

console.log('Running at Port 3001');
