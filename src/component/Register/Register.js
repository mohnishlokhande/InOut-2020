import React, {Component} from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
import './Register.css';
import Logo from '../Image/logo.png'
import { Link } from 'react-router-dom';

export default class Register extends Component{


    render(){
        return(
            <div className="mainContainer">
                <div className="logodiv"><img src={Logo} alt="logo" /></div>
                <div className="backphoto">
                <div>
                    <h2 className="headingReg">Easy Parking</h2>
                </div>
                <br/>
                <div className="regiBox">
                    <Form action = "http://localhost:9001/auth/register" method="post">
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="name">Your Name</Label>
                            
                                <Input type="text" id="name" name="name"
                                    placeholder="Your Name" />
                                    
                            </Row>
                        </FormGroup>
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="email">Your Email</Label>
                            
                                <Input type="email" id="email" name="email"
                                    placeholder="Your Email" />
                            </Row>
                        </FormGroup>
            
                    
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="mobileNo">Mobile No.</Label>
                            
                                <Input type="tel" id="mobileNo" name="mobileNo"
                                    placeholder="Mobile No."/>

                            </Row>
                        </FormGroup>

                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="password">Password</Label>
                            
                                <Input type="password" id="password" name="password"
                                    placeholder="Create a password..."/>

                            </Row>
                        </FormGroup> 
                        {/* <FormGroup>
                            <Label htmlFor ="message" md={2}>Message</Label>
                            <Col md={12}>
                                <Input type="textarea" id="message" name="message"
                                    rows="12" />

                            </Col>
                        </FormGroup> */}
                        <br/>
                        <FormGroup row>
                            <Col className="feedButton">
                                <button type="button" className="btn btnReg">
                                    Register
                                </button>
                            </Col>
                        </FormGroup>
                    </Form>
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