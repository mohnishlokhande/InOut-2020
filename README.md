
## InOut 2020

## Project - Car parking slot Finding App

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
create table user(
	user_id int not null auto_increment,
    username varchar(256),
    email varchar(256),
    password varchar(256),
    primary key	(user_id)
);

create table parking_area(
	park_id int not null auto_increment,
    seller_name int,
    park_name varchar(256) not null,
    contact int,
    park_add varchar(256),
    capacity int,
    price float,
    description varchar(512),
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