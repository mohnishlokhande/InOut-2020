import React, {Component} from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
import './contactus.css';
import Teamcard from './teamcard';
import Mohnish from '../Image/monu.jpg'
import Kaushik from '../Image/karuna.png'
import Profile from '../Image/profilepic.png'
import NavMap from '../MapPg/Navbar';


export default class Contactus extends Component{


    render(){
        const team=[
            {
                id:0,
                name:'Mohnish Lokhande',
                email:'mlokhande@bt.iitr.ac.in',
                image: Mohnish
                
            },
            {
                id:1,
                name:'Akash Kumar',
                email:'akumar@ch.iitr.ac.in',
                image: Profile
                
            },
            {
                id:2,
                name:'Karuna Kaushik',
                email:'kkaushik@bt.iitr.ac.in',
                image: Kaushik

                
            },
            {
                id:3,
                name:'Amit Gohri',
                email:'Agohri@ch.iitr.ac.in',
                image: Profile

                
            }
        ]
        return(
            <>
            <NavMap />
            <div class = "main ">
            <div class="about-section">
  <h1>About Us </h1>
  <p> We the team from IITRoorkee coming forward for some positive cause. Dont forget <br/> to give your precious opinion.Every opinion will be highly appreciated. </p>
  
  <p>Go to the home page <u>Home </u></p>
</div>

<h2 class = "ot" ><u>Our Team</u></h2>

<div className="teamcont">
{team.map((member, index)=>{
    return(
    <div key= {index} className="innerteambox">
        <Teamcard teamdetail={member} />
        </div>
    )
})}
  
</div>

<p> For any query email us at appujappu@gmail.com</p>
</div>
</>









        );
    }
}