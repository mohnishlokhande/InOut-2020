const express = require('express');
const app = express();
const bcrypt = require('bcrypt')    // for hashing passwords
const mysql = require('mysql');
var routes = require('./routes/index'); //requre routes pbject

app.use(express.urlencoded({ extended: true }));    //for accessing req.body.name
app.set('view-engine', 'ejs')    //setting view engine to ejs

// var users = []; //to mimic users in database

app.listen(process.env.port || 3000);       //starting server   

//mysql database
var con = mysql.createConnection({
    host: "mysql-16437-0.cloudclusters.net",
    user: "inout",
    password: "inout2020",
    port: '16437',
    database : 'inout2020'
  });


con.connect((err) => {
    if (err)  
    {
        console.log("connection failed !");
        return 
    }
    return console.log("connected !");
    
    // var sql = "CREATE TABLE registerdetails(id int AUTO_INCREMENT, username VARCHAR(30), email VARCHAR(200), password VARCHAR(30),\
    //  PRIMARY KEY(id))";
    // con.query(sql, function(err, result){
    //     if(err){ 
    //         throw err;
    //     }
    //     console.log("created table");
    // });

});

app.get('/createregistertable', (req, res) => {
    let sql = 'CREATE TABLE registerdetails(id int AUTO_INCREMENT, username VARCHAR(30), email VARCHAR(200), password VARCHAR(30), PRIMARY KEY(id))';
    con.query(sql, (err, result) =>{
        if(err){ 
            console.log(err)
            return
        }
        console.log(result);
        res.send('Table created.......');
    })
})

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

        users.push({
            // id: Date.now().toString(),
            // name: req.body.name,
            email: req.body.email,
            password: hashedPass,
        })

        res.redirect('/login');
    }
    catch {
        res.redirect('/register')   //if there is error redirect to register page
    }
    //console.log(users);
})

app.post('/login', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    //qury database 
})
    


console.log('Running at Port 3001');