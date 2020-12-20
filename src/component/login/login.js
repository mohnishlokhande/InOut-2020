import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';
import './login.css';


export default class Login extends Component{

    constructor(props){
        super(props);
        let loggedIN= false
        this.state={
            email : '',
            password : '',
            loggedIN
        };
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
    }

    handleChange = (e) =>
        this.setState({
            [e.target.name] : e.target.value
        })
    
        handleSubmit=(e)=>{
            e.preventDefault();
            // let {username,password}=this.state;
            fetch('http://localhost:9001/auth/login', {
                 method: 'POST',
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify(this.state)
               }).then(response=>response.json())
            .then(err => {
                console.log(err);
              })
               .then(data=>{
                    window.alert(this.state.email)
                this.props.history.push('/select')
    
                    //Do anything else like Toast etc.
           })
           this.setState({
            email:'',
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
                    <form onSubmit={this.handleSubmit}> 
                        
                        <FormGroup className="col-md-12">
                            <Row>
                            <Label htmlFor ="email">Email</Label> 
                            
                                <Input type="text" id="email" name="email" 
                                    value ={this.state.email} 
                                    onChange = {this.handleChange}
                                    placeholder="Email" />
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
                                <input type="submit" className="btn btnlogin" value="Login">
                                   
                                </input>
                            </Col>
                        </FormGroup>
                    </form>
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