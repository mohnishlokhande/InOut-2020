
## InOut 2020

## Project - Car parking slot Finding App

## project-description
As the life of people is becoming fast we want to save every possible bit of time. In busy cities like Delhi, Bombay,Chennai it becomes  tough to find where to park the vehicle. This platform is not only making the life of people easy by easily providing the nearby parking area but also providing the parking area holder a way of earning money.User can see the nearby parking area from map and can also search in searchbox for booking. Seller will have to provide details for their parking area to earn money and we wil  verify their detail and then will be registered as a seller. Here anyone can book a parking slot at their convenience by both prepaid and postpaid payment charge. we have to register on this platform for booking parking areas and owner of the park  will have to register as a seller.

## Project setup
```
npm install
```
Npm start

## Database setup

Install mysql server and mysql workbench for executing database queries
execute following queries in your mysql workbench to create these tables 

**update your database credentials in mysql.js file to connect to local database**

```
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password",   
    port: '3306',
    database: 'database_name'
});
```
```
create table users(
	user_id int not null auto_increment,
    username varchar(256),
    email varchar(256),
    contact varchar(12),
    password varchar(256),
    primary key	(user_id)
);

create table sellers(
	park_id int not null auto_increment,
    sellername VARCHAR(300),
    park_name varchar(256) not null,
    mobileNo int,
    address varchar(256),
    num int,
    rate float,
    moreinfo varchar(512),
    primary key (park_id)
    #foreign key(seller_name) references user(username)
);
```
## Server setup

In server folder run

```
npm install
node server.js
```
## Start react app
run the following command in the project directory to start the react app
```
npm start
```

It will open your browser and goto http://localhost:3000 where the appis served 
