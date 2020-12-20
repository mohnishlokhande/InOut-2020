import React,{axios, useState ,Component} from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row, FormText } from 'reactstrap';
import Header from '../Header/Header';
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

    state={
        sellername : '',
        park_name : '',
        mobileNo :'',
        address :'',
        num:'',
        rate:'',
        moreinfo:'',
        image:''
    }
    handleChange = (e) =>
        this.setState({
            [e.target.name] : e.target.value
        })
    
    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:9001/auth/parkreg', {
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'content-type':'application/json',
                'accept' : 'application/json'
            }
        })
        .then(response => response.json())

        this.setState({
            sellername:'',
            park_name:'',
            mobileNo :'',
            address :'',
            num:'',
            rate:'',
            moreinfo:'',
            image:''
        })
    }


    render(){
  
        return(
            <>
            <div className="cont">
            <Header/>
                <div className="main">
                    <div className="backpic">
                    <div>
                        <br/>
                        <h2 className="headingReg">Be a seller</h2>
                    </div>
                    <br/>

                    <div className="regBox">
                        <Form className="formCls">

                            <FormGroup className="col-md-12">
                                <Row>
                                <Label htmlFor ="sellername">Your full name</Label>
                        
                                    <Input type="text" id="sellername" name="sellername"
                                        placeholder="Enter your full name" />        
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Row>
                                <Label htmlFor ="park_name">Park name</Label>
                        
                                    <Input type="text" id="park name" name="park_name"
                                        placeholder="Park name" />        
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
                                <Label htmlFor ="address">Park address</Label>
                                    <Input type="text" id="address" name="address"
                                        placeholder="Park address..." />
                                </Row>
                            </FormGroup>
                            
                            <Row className="col-md-12" style={{justifyContent:"space-between"}}>
                            <FormGroup className="col-md-5">
                                <Row>
                                <Label hymlFor="num">No. of parking slots</Label>
                                <Input type="number" name="num" id="num" placeholder="00" />
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-5">
                                <Row>
                                <Label htmlFor ="rate">Rate/hour</Label>
                                
                                    <Input type="number" id="rate" name="rate"
                                        placeholder="Expected rate/hour in INR" />
                                </Row>
                            </FormGroup>
                            </Row>
                            <FormGroup className="col-md-12">
                                <Label htmlFor ="moreinfo">Tell more about yourself: </Label>
                                <Row>
                                <br/>
                                <textarea model=".message" id ="moreinfo" rows="10" className="col-md-12" style={{borderRadius:"5px"}}  
                                    name ="moreinfo" placeholder="Write in less than 150 words"/>    
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Label for="image" sm={2} className="imgUp">Images</Label>
                                <Col sm={12}>
                                <Input type="file" name="image" id="image"/>
                                <FormText color="white" style={{textAlign:"justify"}}>
                                    Upload some photos of the parking area.
                                </FormText>
                                </Col>
                            </FormGroup>
                            <hr/>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" />{' '}
                                    Check me out
                                </Label>
                            </FormGroup>
                            <FormGroup row>
                                <Col className="feedButton">
                                    <button type="button" className="btn btn-primary btApply">
                                        Apply
                                    </button>
                                </Col>
                            </FormGroup> 
                        </Form>
                    </div>

                    {/* <div className ="App">
                        <input type = "file" onChange = {this.fileSelectedHandler} />
                        <upload onClick = { this.fileUploadHandler}>Button</upload>
                        </div> */}

                            </div>   
                </div>
                </div>
            </>
        );
    }
}