var mysql = require('mysql');
const { useParams } = require('react-router-dom');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Amit@123",   
    port: '3306',
    database: 'inout7'
});

con.connect((err) => {
    if (err) {
        console.log("connection failed !");
        return
    }
    return console.log("connected !");
});
module.exports = con;



// //// users table
//   var sql = "CREATE TABLE users (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("users table created");
// });
// // // 


//// sellers table
// var sql = "CREATE TABLE sellers (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(" sellers Table created");
// });

// //// current_day_availablity
// var sql = "CREATE TABLE curr_day_booking_availability (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255), zero_one INT,one_two INT,two_three INT, three_four INT,four_five INT,five_six INT,six_seven INT, seven_eight INT,eight_nine INT,nine_ten INT,ten_eleven INT,eleven_twelve INT,twleve_thirteen INT, thirteen_fourteen INT,fourteen_fifteen INT,fifteen_sixteen INT, sixteen_seventeen INT,seventeen_eighteen INT,eighteen_nineteen INT,nineteen_twenty INT,twenty_twentyone INT,twentyone_twentytwo INT,twentytwo_twentythree INT,twentythree_zero INT)";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(" curr_day_booking Table created");
// });

// ////next day availability
// var sql = "CREATE TABLE next_day_booking_availabiity (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255), zero_one INT,one_two INT,two_three INT, three_four INT,four_five INT,five_six INT,six_seven INT, seven_eight INT,eight_nine INT,nine_ten INT,ten_eleven INT,eleven_twelve INT,twleve_thirteen INT, thirteen_fourteen INT,fourteen_fifteen INT,fifteen_sixteen INT, sixteen_seventeen INT,seventeen_eighteen INT,eighteen_nineteen INT,nineteen_twenty INT,twenty_twentyone INT,twentyone_twentytwo INT,twentytwo_twentythree INT,twentythree_zero INT)";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("next_day_booking Table created");
// });

// //// previous day availability
// var sql = "CREATE TABLE previous_day_booking (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255), zero_one INT,one_two INT,two_three INT, three_four INT,four_five INT,five_six INT,six_seven INT, seven_eight INT,eight_nine INT,nine_ten INT,ten_eleven INT,eleven_twelve INT,twleve_thirteen INT, thirteen_fourteen INT,fourteen_fifteen INT,fifteen_sixteen INT, sixteen_seventeen INT,seventeen_eighteen INT,eighteen_nineteen INT,nineteen_twenty INT,twenty_twentyone INT,twentyone_twentytwo INT,twentytwo_twentythree INT,twentythree_zero INT)";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("previous_day_booking Table created");
// });


// //// updating table with change in day

// setInterval(function () {

//     var date = new Date();
//     var hrs = date.getHours();
//     var min = date.getMinutes();

//     if (hrs == 0 && min == 0) {

//         ////availability table update
//         con.query("drop table previous_day_availability ", function (err, res) {
//             if (err) throw err;
//         });

//         var sql = "ALTER TABLE current_day_availability RENAME TO previous_day_availability";
//         con.query(sql, function (err, res) {
//             if (err)
//                 throw err;
//             console.log("current changed to previous");
//         });

//         var sql = "ALTER TABLE next_day_availability RENAME TO current_day_availability";
//         con.query(sql, function (err, res) {
//             if (err)
//                 throw err;
//             console.log("current changed to previous");
//         });

//         var sql = "CREATE TABLE next_day_availability (email VARCHAR(255) PRIMARY KEY, name VARCHAR(255), zero_one INT,one_two INT,two_three INT, three_four INT,four_five INT,five_six INT,six_seven INT, seven_eight INT,eight_nine INT,nine_ten INT,ten_eleven INT,eleven_twelve INT,twleve_thirteen INT, thirteen_fourteen INT,fourteen_fifteen INT,fifteen_sixteen INT, sixteen_seventeen INT,seventeen_eighteen INT,eighteen_nineteen INT,nineteen_twenty INT,twenty_twentyone INT,twentyone_twentytwo INT,twentytwo_twentythree INT,twentythree_zero INT)";
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("next_day_booking Table created");
//         });




//         //// booking table update

//         con.query("drop table previous_day_booking_record", function (err, res) {
//             if (err) throw err;
//         });

//         var sql = "ALTER TABLE current_day_booking_record RENAME TO previous_day_booking_record";
//         con.query(sql, function (err, res) {
//             if (err)
//                 throw err;
//             console.log("current changed to previous");
//         });

//         var sql = "ALTER TABLE next_day_booking_record RENAME TO current_day_booking_record";
//         con.query(sql, function (err, res) {
//             if (err)
//                 throw err;
//             console.log("next changed to current");

//         });

//         var sql = "CREATE TABLE next_day_booking_record (user_email VARCHAR(255), seller_email VARCHAR(255), time_slot VARCHAR(255), no_of_bookings INT)";
//         con.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("users table created");
//         });




//     }
// }, 60000);



// var sql = "CREATE TABLE booking_record (user_email VARCHAR(255), seller_email VARCHAR(255), time_slot VARCHAR(255), no_of_bookings INT)";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("users table created");
// });

// var sql = "ALTER TABLE booking_record RENAME TO current_day_booking_record";
// con.query(sql, function (err, res) {
//     if (err)
//         throw err;
//     console.log("current changed to previous");
// });

// var sql = "CREATE TABLE previous_day_booking_record (user_email VARCHAR(255), seller_email VARCHAR(255), time_slot VARCHAR(255), no_of_bookings INT)";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("users table created");
// });
// var sql = "CREATE TABLE next_day_booking_record (user_email VARCHAR(255), seller_email VARCHAR(255), time_slot VARCHAR(255), no_of_bookings INT)";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("users table created");
// });

// con.query("show tables", function (err, res) {
//     console.log(res);
// });
