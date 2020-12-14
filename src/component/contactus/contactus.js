import React, {Component} from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
import './contactus.css';



export default class Contactus extends Component{


    render(){
        return(
            <div class = "main ">
            <div class="about-section">
  <h1>About Us </h1>
  <p> We the team from IITRoorkee coming forward for some positive cause. Dont forget <br/> to give your precious opinion.Every opinion will be highly appreciated. </p>
  
  <p>Go to the home page <u>Home </u></p>
</div>

<h2 class = "ot" ><u>Our Team</u></h2>
<div class="row">
  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team1.jpg" alt="Jane" style="width:100%"> */}
      <div class = " pic1"> </div>
      <div class="container">
        <h2>Amitanshu Gohri</h2>
        <p class="title">CEO & Founder</p>
        
        <p>amitansa@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
      <div class="container">
        <h2>Karuna Kaushik</h2>
        <p class="title">Art Director</p>
        
        <p>K_corona@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" style="width:100%"> */}
      <div class="container">
        <h2>Akash Kumar</h2>
        <p class="title">Art Director</p>
        
        <p>Akumar45@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      {/* <img src="/w3images/team3.jpg" alt="John" style="width:100%"> */}
      <div class="container">
        <h2>Mohnish lokhande</h2>
        <p class="title">Designer</p>
       
        <p>mohnish1@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

</div>

<p> For any query email us at appujappu@gmail.com</p>
</div>










        );
    }
}