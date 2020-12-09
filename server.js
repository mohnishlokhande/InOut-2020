const express = require('express');
const app = express();
const bcrypt = require('bcrypt')    // for hashing passwords
var routes = require('./routes/index'); //requre routes pbject
var bodyParser = require('body-parser')// require to handle http post
app.use(express.urlencoded({ extended: true }));    //for accessing req.body.name
app.set('view-engine', 'ejs')    //setting view engine to ejs

// var users = []; //to mimic users in database
app.listen(process.env.port || 3001);       //starting server   

//mysql database
var con = require("./mysql");
var login = require('./logindatacontrol')
var register = require("./registerdatacontrol");

//import routes from route/index.js
app.use('/', routes);

app.post('/register', async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10) //async function returning hashed password to be stored in database
       

        res.redirect('/login');
    }
    catch {
        res.redirect('/register')   //if there is error redirect to register page
    }
    //console.log(users);
})

app.post('/login', (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    //qury database SELECT details from  Registeration table for login 

})
    


console.log('Running at Port 3001');