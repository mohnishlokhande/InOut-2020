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
            con.query(sql2, function (err, result2) {
                if (err) {
                    console.log(err);
                } else {
                    var no_of_parking;
                    var capacity = [];
                    var sql6 = "select park_name from parking_area"
                    con.query(sql6, function (err, result6) {
                        if (err) {
                            console.log('here54   ');
                            console.log(err);
                        }
                        else {
                            no_of_parking = result6.length;

                            var parkName= [];
                            var sql7 = "select park_name from parking_area";
                            con.query(sql7, function (err, result_parkname) {
                                if (err) {
                                    console.log('kfask');
                                } else {
                                    console.log(result_parkname);
                                    parkName = result_parkname;
                                    var sql8 = "select capacity from parking_area";
                                    con.query(sql8, function (err, result8) {
                                        if (err) {
                                            console.log('err');
                                        }
                                        else {
                                            var count = 0;
                                            console.log(result8);
                                            result8.map((aray) => {
                                                console.log('kskjasskfkk');
                                                capacity[count] = aray.capacity.toString();
                                                console.log('jjksfaskjkj  sfsd');
                                                count++;

                                            });
                                            //convert capacity array to string
                                            for (var index = 1; index <= no_of_parking; index++) {
                                                var id = index.toString();

                                                var sql9 = "insert into " + table_name + " (park_id, park_name, zero_one,one_two,two_three, three_four,four_five,five_six,six_seven, seven_eight,eight_nine,nine_ten,ten_eleven,eleven_twelve,twleve_thirteen, thirteen_fourteen,fourteen_fifteen,fifteen_sixteen, sixteen_seventeen,seventeen_eighteen,eighteen_nineteen,nineteen_twenty,twenty_twentyone,twentyone_twentytwo,twentytwo_twentythree,twentythree_zero) values (" + id + ",'" + parkName[index - 1].park_name + "'," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + "," + capacity[index - 1] + ")";
                                                con.query(sql9, function (err, result) {
                                                    if (err) {
                                                        console.log(err);
                                                    }
                                                    
                                                })

                                            }
                                            
                                            res.json({
                                                "result": "table initialised successfully"

                                            })
                                            
                                        }
                                    })
                                }
                            })





                        }


                    })





                    //initialise the table and makr available 
                    //send response 
                }

            })

        } else {
            //console.log('here2');
            //console.log(err);
            var sql4 = "select * from " + table_name +  " where park_name = " + req.body.park_name   ;
            console.log(sql4);
            con.query(sql4, function (err, result) {
                if (err) {
                    
                    console.log(err);
                } else {
                    var from_time = req.body.from_time;
                    console.log(result);
                    res.json({
                        "zero_one": res[0].zero_one,
                        "one_two": res[0].one_two,
                        "three_four": res[0].three_four,
                        "five_six": res[0].five_six,
                        "seven_eight": res[0].seven_eight,
                        "eight_nine": res[0].eight_nine,
                        "nine_ten": res[0].nine_ten,
                        "ten_eleven": res[0].ten_eleven,
                        "eleven_twelve": res[0].eleven_twelve,
                        "twleve_thirteen": res[0].twleve_thirteen,
                        "thirteen_fourteen": res[0].thirteen_fourteen,
                        "fourteen_fifteen": res[0].fourteen_fifteen,
                        "fifteen_sixteen": res[0].fifteen_sixteen,
                        "sixteen_seventeen": res[0].sixteen_seventeen,
                        "seventeen_eighteen": res[0].seventeen_eighteen,
                        "eighteen_nineteen": res[0].eighteen_nineteen,
                        "nineteen_twenty": res[0].nineteen_twenty,
                        "twenty_twentyone": res[0].twenty_twentyone.park_name,
                        "twentyone_twentytwo": res[0].twentyone_twentytwo,
                        "twentytwo_twentythree": res[0].twentytwo_twentythree,
                        "twentythree_zero": res[0].twentythree_zero
                    })

                }
            })

        }
    })
})
module.exports = router;