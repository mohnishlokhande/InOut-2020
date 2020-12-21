const express = require('express');
var router = express.Router();
// var session =require('express-session')
//define routes here

//home
router.get('/', (req, res) => {
    res.render('index.ejs');
});

//register
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

//login
router.get('/login', (req, res) => {
    res.render('login.ejs');
});

//plotregister

router.get('/parkreg',(req, res) => {
    res.render('seller.ejs');
})
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

// router.get('/parkselection', (request, result)=>{
// 	db.query("SELECT * FROM sellers", function(err, results, fields){
// 		if(err) throw err;
// 	   result.send(results);
//    })
// })
module.exports = router;