import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron, Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink } from 'react-router-dom';
import '../Header/Header.css';

class NavMap extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);                      //we have to bind with the constructor
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/car-parking.jpg" height="30" width="41" alt="Perfect Parking  lot" />&nbsp;&nbsp;
                        </NavbarBrand> 
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/select">
                                        <span className="fa fa-home fa-lg"></span>&nbsp;Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/search">
                                        <span className="fa fa-list fa-lg"></span>&nbsp;Parking list
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/map">
                                        <span className="fa fa-map fa-lg"></span>&nbsp;Map
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>&nbsp;Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/userprofile">
                                        <span className="fa fa-user fa-lg"></span>&nbsp;Profile
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>  
                
            </>
        );
    }
}

export default NavMap;