const express = require('express');
var router = express.Router();
var con = require('../mysql');

//require username , parking name, date, time, 

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let seconds = date_ob.getSeconds();
var da = date + "_" + month + "_" + year;
var DATE = da.toString()
var table_name = "avail_" + DATE;

router.post('/', (req, res) => {
    //update queries from workbench
    var sql1 = "select * from avail_" + DATE;

    var sql2 = "create table avail_" + DATE + "(park_id int not null,park_name varchar(256),zero_one INT,one_two INT,two_three INT, three_four INT,four_five INT,five_six INT,six_seven INT, seven_eight INT,eight_nine INT,nine_ten INT,ten_eleven INT,eleven_twelve INT,twleve_thirteen INT, thirteen_fourteen INT,fourteen_fifteen INT,fifteen_sixteen INT, sixteen_seventeen INT,seventeen_eighteen INT,eighteen_nineteen INT,nineteen_twenty INT,twenty_twentyone INT,twentyone_twentytwo INT,twentytwo_twentythree INT,twentythree_zero INT,foreign key(park_id) references parking_area(park_id))"

    // con.query('select * from asfffkshjh', function (err, result) {
    //     if (err) {
    //         console.log(err);
    //     }
    // })


    con.query(sql1, function (err, results) {
        if (err) {
            console.log('here1');
            con.query(sql2, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    var sql5 = "insert into " + table_name + "()"




                    //initialise the table and makr available 
                    //send response 
                }

            })
            //initialise the table with full capacity
        } else {
            //console.log('here2');
            //console.log(err);
            var sql4 = "select * from " + table_name + " where park_name = " + "\"" + req.body.park_name + "\"";
            //console.log(sql4);
            con.query(sql4, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    var from_time = req.body.from_time;
                    
                    res.json({
                        "zero_one": res[0].zero_one,
                        "one_two": res[0].one_two,
                        "three_four":res[0].three_four,
                        "five_six":res[0].five_six,
                        "seven_eight":res[0].seven_eight,
                        "eight_nine":res[0].eight_nine,
                        "nine_ten":res[0].nine_ten,
                        "ten_eleven":res[0].ten_eleven,
                        "eleven_twelve":res[0].eleven_twelve,
                        // "twleve_thirteen" : thirteen_fourteen_fourteen_fifteen fifteen_sixteen INT, sixteen_seventeen INT,seventeen_eighteen INT,eighteen_nineteen INT,nineteen_twenty INT,twenty_twentyone INT,twentyone_twentytwo INT,twentytwo_twentythree INT,twentythree_zero INT,"
                    })

                }
            })

        }
    })
})
module.exports = router;