const express = require('express');
// const { accessSync } = require('fs');
const app = express();
// const path = require('path');
const bcrypt = require('bcrypt')    // for hashing passwords
// const router = express.Router();
var routes = require('./routes/index');
var cors = require('cors')
var session = require('express-session');
//mysql database
const con = require('./mysql')


app.use(cors());
app.use(express.urlencoded({ extended: true }));    //for accessing req.body.name

// var users = [];

app.set('view-engine', 'ejs')       //setting view engine to ejs

app.listen(process.env.port || 3001);       //starting server   

//setting routes 

app.get('/', (req, res) => {
    res.render('index.ejs')
})
app.get('/login', (req, res) => {
    res.render('login.ejs');
})

app.get('/register', (req, res) => {
    res.render('register.ejs');
})

app.post('/register', async (req, res) => {
    try {
        const hashedPass = await bcrypt.hash(req.body.password, 10) //async function returning hashed password to be stored in database
        //check if the user email is registered or not
        //if user is not registered then create a new user in the database
        //store this user in database
        //Inser details into  Registeration table for 
        // var users={
        //     // id: Date.now().toString(),
        //     "name": req.body.name,
        //     "email": req.body.email,
        //     "password": hashedPass,
        //     "contact" : req.body.contact
        // }
        // con.query('INSERT INTO users SET ?',users,  (err, results, fields) =>{
        //     if (err) {
        //       res.send('there is something error')
        //     }else{
        //         res.send('user registered sucessfully')
        //     }
        //   });

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