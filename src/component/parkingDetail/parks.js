import React, { useState } from 'react'
import Header from '../Header/Header'
import './parks.css'
import Parkpic from './car-parking.jpg'
import { Link } from 'react-router-dom'
// import CheckAvailability from '../checkavailability'
// import * as parkDate from "../MapPg/data/skateboard-parks.json";


// function loadScript(src) {
// 	return new Promise((resolve) => {
// 		const script = document.createElement('script')
// 		script.src = src
// 		script.onload = () => {
// 			resolve(true)
// 		}
// 		script.onerror = () => {
// 			resolve(false)
// 		}
// 		document.body.appendChild(script)
// 	})
// }

// const __DEV__ = document.domain === 'localhost'

function Parkdetail() {
	
	const [showResults, setShowResults] = useState(false)
	const handleseatavail = () => setShowResults(true)
	
        return(
            <>
            
            <Header />
            <div className="parkbox"> 
                <h1>Parking Name</h1>
                    <div className="parkdetail">
                        <div className="parkA">
                           <div className="parkAinnerdiv">
                           <p>Park Name : Acchi wali parking</p>
                            <p>Address : 1490 Youville Drive</p>
                            <p>contact numaber : 1234567890</p>
                            <p>Parking Rate : 20-/hour</p>
                           </div><br />
                            <div className="btns">
							<Link to="/booking">
                               Book Here
                               
                            </Link> 
							&nbsp;  &nbsp;
							<button >
                               View in MAP
                               
                            </button>  
							</div><br/>
							<button type="button" className="checkAvailbtn" onClick={handleseatavail} >
							CheckAvailability 
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