import React,{axios, useState ,Component} from 'react';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row, FormText } from 'reactstrap';
import Header from '../Header/Header';
import './SellerReg.css';
// import Logo from '../Image/logo.png'


export default class SellerReg extends Component{
    // constructor(props){
    //     super(props)
        // this.
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
        // console.log(this.state)
    // }

     
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
        .then(data => {
            window.alert("Parking lot registered successfully", this.state)
        })

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
                        <form className="formCls" onSubmit={this.handleSubmit} >

                            <FormGroup className="col-md-12">
                                <Row>
                                <Label htmlFor ="sellername">Your full name</Label>
                        
                                    <Input type="text" id="sellername" name="sellername" value={this.state.sellername} onChange={this.handleChange}
                                        required placeholder="Enter your full name" />        
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Row>
                                <Label htmlFor ="park_name">Park name</Label>
                        
                                    <Input type="text" id="park name" name="park_name" value={this.state.park_name} onChange={this.handleChange}
                                        required placeholder="Park name" />        
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Row>
                                <Label htmlFor ="mobileNo">Mobile No.</Label>       
                                    <Input type="text" id="mobileNo" name="mobileNo" value={this.state.mobileNo} onChange={this.handleChange}
                                        required placeholder="Mobile No."/>
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Row>
                                <Label htmlFor ="address">Park address</Label>
                                    <Input type="text" id="address" name="address" value={this.state.address} onChange={this.handleChange}
                                        required placeholder="Park address..." />
                                </Row>
                            </FormGroup>
                            
                            <Row className="col-md-12" style={{justifyContent:"space-between"}}>
                            <FormGroup className="col-md-5">
                                <Row>
                                <Label hymlFor="num">No. of parking slots</Label>
                                <Input type="number" required name="num" id="num" placeholder="00" value={this.state.num} onChange={this.handleChange} />
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-5">
                                <Row>
                                <Label htmlFor ="rate">Rate/hour</Label>
                                
                                    <Input type="number" id="rate" name="rate" required value={this.state.rate} onChange={this.handleChange}
                                        placeholder="Expected rate/hour in INR" />
                                </Row>
                            </FormGroup>
                            </Row>
                            <FormGroup className="col-md-12">
                                <Label htmlFor ="moreinfo">Tell more about yourself: </Label>
                                <Row>
                                <br/>
                                <textarea model=".message" id ="moreinfo" rows="10" className="col-md-12" style={{borderRadius:"5px"}}  value={this.state.moreinfo} onChange={this.handleChange}
                                    name ="moreinfo" placeholder="Write in less than 150 words"/>    
                                </Row>
                            </FormGroup>
                            <FormGroup className="col-md-12">
                                <Label for="image" sm={2} className="imgUp">Images</Label>
                                <Col sm={12}>
                                <Input type="file" name="image" id="image" value={this.state.image} onChange={this.handleChange}/>
                                <FormText color="white" style={{textAlign:"justify"}}>
                                    Upload some photos of the parking area.
                                </FormText>
                                </Col>
                            </FormGroup>
                            <hr/>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" required/>{' '}
                                    Check me out
                                </Label>
                            </FormGroup>
                            <FormGroup row>
                                <Col className="feedButton">
                                    <input type="submit" value="Apply" className="btn btn-primary btApply">
                                        {/* Apply */}
                                    </input>
                                </Col>
                            </FormGroup> 
                        </form>
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