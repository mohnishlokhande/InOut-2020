import React, { Component } from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
import './Register.css';
import Logo from '../Image/logo.png'
import { Link } from 'react-router-dom';

export default class Register extends Component{
    
    state={
        username : '',
        password : '',
        email :'',
        contact :''
    }
    handleChange = (e) =>
        this.setState({
            [e.target.name] : e.target.value
        })

    handleSubmit=(e)=>{

        // let {username,password}=this.state;
        fetch('http://localhost:9001/auth/register', {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(this.state)
           }).then(response=>response.json())
        //    .then(response => console.log(response))
        .then(err => {
            console.log(err);
          })
           .then(data=>{
                window.alert("Registered Successfully")
            this.props.history.push('/select')

                //Do anything else like Toast etc.
       })
       this.setState({
        username:'',
        password:'' ,
        email :'',
        contact :''
    })
       
       }
    render(){

        return(
            <div className="mainContainer">
                <div className="backphoto">
                {/* <div className="logodivreg"><img src={Logo} alt="logo" /></div> */}
                <div>
                    <h2 className="headingReg">Easy Parking</h2>
                </div>
                <br/>
                <div className="regiBox">
                    <form >
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="username">UserName</Label>
                            
                                <Input type="text" id="username" required name="username" value ={this.state.username} onChange = {this.handleChange}
                                    placeholder="Your Name" />
                                    
                            </Row>
                        </FormGroup>
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="email">Your Email</Label>
                            
                                <Input type="email" id="email" name="email" value ={this.state.email} onChange = {this.handleChange}
                                    placeholder="Your Email" />
                            </Row>
                        </FormGroup>
            
                    
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="mobileNo">Mobile No.</Label>
                            
                                <Input type="contact" id="contact" name="contact" value ={this.state.contact} onChange = {this.handleChange}
                                    placeholder="Mobile No."/>

                            </Row>
                        </FormGroup>

                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="password">Password</Label>
                            
                                <Input type="password" id="password" name="password" value ={this.state.password} onChange = {this.handleChange}
                                    placeholder="Create a password..."/>

                            </Row>
                        </FormGroup> 
                        <br/>
                        <FormGroup row>
                            <Col className="feedButton">
                                <button type="button" className="btn btnReg" onClick={this.handleSubmit}>
                                    Register
                                </button>
                            </Col>
                        </FormGroup>
                    </form>
                </div>
                </div>
                <br/>
                <div>
                    <Link to="/login"><h5 className="headingReg">Already have an account? Log In</h5></Link>
                </div>
                
            </div>
        );
    }
}