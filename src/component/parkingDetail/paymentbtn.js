import React, { useState } from 'react'
import './parks.css'


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

function Paymentbtn() {
	const [name, setName] = useState('Mehul')
	const [showResults, setShowResults] = useState(false)
	const handleseatavail = () => setShowResults(true)
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
            <div className="btns" >
            <button onClick={displayRazorpay}>
                               Book Now
                            </button>
            </div>
            
           
            </>
        )
 
}

export default Paymentbtn;