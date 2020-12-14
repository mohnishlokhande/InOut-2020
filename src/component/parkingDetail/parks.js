import React, { useState } from 'react'
import Header from '../Header/Header'
import './parks.css'
import Parkpic from './car-parking.jpg'
// import * as parkDate from "../MapPg/data/skateboard-parks.json";


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Parkdetail() {
	const [name, setName] = useState('Mehul')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Check your internet connection')
			return
		}

		const data = await fetch('http://localhost:9001/razorpay', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_obECvLmr55neCO' : 'NOT_AVILABLE',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Car Parking',
			description: 'Thank you for booking park slot',
			image: 'http://localhost:9001/logo.svg',
			handler: function (response) {
				alert(response.razorpay_payment_id)
				alert(response.razorpay_order_id)
				alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
        return(
            <>
            
            <Header />
            <div className="parkbox"> 
                <h1>Parking Name</h1>
                    <div className="parkdetail">
                        <div className="parkA">
                           <div className="parkAinnerdiv">
                           <p>Park Name : Achchiwali parking</p>
                            <p>Address : 1490 Youville Drive</p>
                            <p>contact numaber : 1234567890</p>
                            <p>Parking Rate : 20-/hour</p>
                           </div><br />
                           <button onClick={displayRazorpay}>
                               Book Now
                            </button>
                        </div>
                    <div className="parkimg">
                            <img src={Parkpic} alt="ParkPic" />
                    </div>
                </div>
            </div>
            </>
        )
 
}

export default Parkdetail;