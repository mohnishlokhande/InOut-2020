import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
 import './login.css';


export default class Login extends Component{
    state={
        username : '',
        password : '',
    }
    handleChange = (e) =>
        this.setState({
            [e.target.name] : e.target.value
        })
    
    handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:9001/login', {
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'content-type':'application/json',
                'accept' : 'application/json'
            }
        })
        .then(response => response.json())
        // .then(data=>{
        //     // localStorage.setItem('userId', data.username)
        //     // this.props.setUser(data.username)
        //     this.props.history.push('/select')
        // })

        this.setState({
            username:'',
            password:''
        })
    }
    


    render(){
        return(
            <div className="mainContainer">
                <div className="backphoto">
                <div>
                    <h2 className="headingReg">Easy Parking</h2>
                </div>
                <br/>
                <div className="regidBox">
                    <Form onSubmit={this.handleSubmit}> 
                        
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="email">Username</Label>
                            
                                <Input type="text" id="username" name="username" value ={this.state.username} onChange = {this.handleChange}
                                    placeholder="USERNAME" />
                            </Row>
                        </FormGroup>
            
                    
                       

                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="password">Password</Label>
                            
                                <Input type="password" id="password" name="password" value ={this.state.password} onChange = {this.handleChange}
                                    placeholder="Enter Password"/>

                            </Row>
                        </FormGroup> 
                        <br/>
                        <FormGroup row>
                            <Col className="feedButton">
                                <button type="button" className="btn btnlogin" >
                                    Login
                                </button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                </div>
                <br/>
                <div>
                    <Link to="/register"><h5 className="headingReg">Does not have an account? Register here!</h5></Link>
                </div>
                
            </div>
        );
    }
}