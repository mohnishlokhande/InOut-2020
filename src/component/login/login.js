import React, {Component} from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
 import './login.css';


export default class Login extends Component{


    render(){
        return(
            <div className="mainContainer">
                <div className="backphoto">
                <div>
                    <h2 className="headingReg">Easy Parking</h2>
                </div>
                <br/>
                <div className="regidBox">
                    <Form>
                        
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="email">Your Email</Label>
                            
                                <Input type="email" id="email" name="email"
                                    placeholder="Your Email" />
                            </Row>
                        </FormGroup>
            
                    
                       

                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="password">Password</Label>
                            
                                <Input type="password" id="password" name="password"
                                    placeholder="Enter Password"/>

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
                                <button type="button" className="btn btnlogin">
                                    Login
                                </button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                </div>
                <br/>
                <div>
                    <h5 className="headingReg">Already have an account? Log In</h5>
                </div>
                
            </div>
        );
    }
}