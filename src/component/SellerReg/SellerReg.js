import React,{axios, useState ,Component} from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
import './SellerReg.css';
// import Logo from '../Image/logo.png'


export default class SellerReg extends Component{
    // fileSelectedHandler = event =>{
    //    this.setState({
    //        selectedFile: event.target.files[0]
    //    })
    //   }

    //  state = {
    //      selectedFile: null
    //  } 
    // //  fileUploadHandler = () =>{
    // //      axios.post('')
    // //  }
    render(){
  
        return(
            <div className="main">
                    
                <div className="backpic">
                <div>
                    <h2 className="headingReg">Be a seller</h2>
                </div>
                <br/>

                <div className="regBox">
                    <Form>

                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="park_name">Park name</Label>
                    
                                <Input type="text" id="park name" name="park_name"
                                    placeholder="Park_Name" />        
                            </Row>
                        </FormGroup>

                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="adress">Your Adress</Label>
                                <Input type="text" id="adress" name="adress"
                                    placeholder="Your Adress..." />
                            </Row>
                        </FormGroup>
            
                    
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="mobileNo">Mobile No.</Label>       
                                <Input type="text" id="mobileNo" name="mobileNo"
                                    placeholder="Mobile No."/>
                            </Row>
                        </FormGroup>

                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="rate">rate/hour</Label>
                            
                                <Input type="text" id="rate" name="rate"
                                    placeholder="Expected rate/hour" />
                            </Row>
                        </FormGroup>

                        
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="moreinfo">Tell more about yourself: </Label>
                            <br/>
                            <textarea id ="moreinfo" rows="2" cols = "13"  name = "moreinfo" placeholder=" write in less than 100 words"/>    
                            </Row>
                        </FormGroup>
                    </Form>
                </div>
{/* 
                <div className ="App">
                     <input type = "file" onChange = {this.fileSelectedHandler} />
                     <upload onClick = { this.fileUploadHandler}>Button</upload>
                    </div> */}


                    <form>
                <FormGroup row>
                            <Col className="feedButton">
                                <button type="button" className="btn btnApply">
                                    Apply
                                </button>
                            </Col>
                        </FormGroup> 
                        </form>

                        </div>   
            </div>
        );
    }
}