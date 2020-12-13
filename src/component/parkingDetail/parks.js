import React, { Component } from 'react'
import Header from '../Header/Header'
import './parks.css'
import Parkpic from './car-parking.jpg'
// import * as parkDate from "../MapPg/data/skateboard-parks.json";

export default class Parkdetail extends Component{
    render(){
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
                           <button>Book Now</button>
                        </div>
                    <div className="parkimg">
                            <img src={Parkpic} alt="ParkPic" />
                    </div>
                </div>
            </div>
            </>
        )
    }
}