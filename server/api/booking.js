const express = require('express');
var router = express.Router();
var con = require('../mysql');

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let seconds = date_ob.getSeconds();
var da = date + "_" + month + "_" + year;
var DATE = da.toString()
var table_name = "avail_" + DATE;    


function booking(req,res) {
    //assume availability exists
    var no_of_seats = req.body.seats;
    var Seats = no_of_seats.toString();
    var sql1 = "select * from " + table_name + " where park_name = " + req.body.park_name;
    var time_aray = req.body.time;
    async function test() {
         await time_aray.map(function(time) {
            //var sql2 = "alter table " + table_name + " alter column " + time + " where park_name = " + req.body.park_name;
            var sql2 = "update " + table_name + " set " + time + " = (" + time + " - " + Seats + " ) where park_name = " + req.body.park_name; 
    
            con.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                }
            })
         })
        res.json({
            booked: "succesfully booked"
        })
    }
    
    test();

    

    
}



router.post('/', booking);