const express = require('express');
const app = express();
const bcrypt = require('bcrypt')    // for hashing passwords
var routes = require('./routes/index'); //requre routes pbject
var bodyParser = require('body-parser')// require to handle http post
const cors = require('cors');
const shortid = require('shortid')
const Razorpay = require('razorpay') //payment 

app.use(express.urlencoded({ extended: true }));    //for accessing req.body.name
app.set('view-engine', 'ejs')    //setting view engine to ejs
app.use(cors());

// var users = []; //to mimic users in database
app.listen(process.env.port || 9001);       //starting server   

//mysql database
var con = require("./mysql");

//import routes from route/index.js
app.use('/', routes);

//creating test api
var testAPI = require('./routes/testAPI');
app.use('/testAPI', testAPI);

app.use('/auth', require('./routes/auth'))




//PAYMENT 


const razorpay = new Razorpay({
	key_id: 'rzp_test_obECvLmr55neCO',
	key_secret: 'DeeW1NmHz5ba9Aa2RD1t5bvd'
})


app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})
console.log('Running at Port 9001');
