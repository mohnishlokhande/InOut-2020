import React, { Component } from 'react'
import './contactus.css';

export default class Teamcard extends Component{
    render(){
      const teamdetails = this.props.teamdetail;

        return(
            <>
            <div class="team">
            <div class="team-img">
              <img src={teamdetails.image} alt="Team Image"/>
              <div class="team-social">
                {/* <a class="social-tw" href=""><i class="fa fa-twitter"></i></a> */}
                <a class="social-fb" href=""><i class="fa fa-facebook"></i></a>
                <a class="social-li" href=""><i class="fa fa-linkedin"></i></a>
                <a class="social-in" href=""><i class="fa fa-instagram"></i></a>
                <a class="social-tw" href=""><i class="fa fa-github"></i></a>
                {/* <a class="social-yt" href=""><i class="fa fa-youtube"></i></a> */}
              </div>
            </div>
            <div class="team-content">
              <h2>{teamdetails.name}</h2>
              <h3>{teamdetails.position}</h3>
              <p>Email: {teamdetails.email}</p>
              <div class="team-skill">
                <div class="skill-name">
                  <p>ReactJs</p><p>90%</p>
                </div>
                <div class="progress">
                  <div class="progress-bar w-90"></div>
                </div>
                <div class="skill-name">
                  <p>NodeJs</p><p>80%</p>
                </div>
                <div class="progress">
                  <div class="progress-bar w-80"></div>
                </div>
                <div class="skill-name">
                  <p>MySQL</p><p>70%</p>
                </div>
                <div class="progress">
                  <div class="progress-bar w-70"></div>
                </div>
              </div>
            </div>
            </div>
            </>
        )
    }
}