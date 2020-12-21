import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron, Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink, Redirect} from 'react-router-dom';
import './Header.css';
import DropD from './Dropdown';
import auth from '../protection/auth';

class Header extends Component{

    constructor(props){
        let loggedIn =true;
        super(props);
        this.state = {
            isNavOpen: false,
            loggedIn
        };
        this.toggleNav = this.toggleNav.bind(this);                      //we have to bind with the constructor
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    // handleLogout = e => {
    //     this.props.history.push("/login");
    // }
    // handleLogout(){
    //     this.setState({
    //         loggedInStatus: "NOT_LOGGED_IN",
    //         user:{}
    //     })
    handleLogout = () => {
        // auth.logout(() =>{
            // removeUserSession();
            this.setState({
                loggedIn:false
            })
           // this.props.history.push("/login");
        // })
    }

    render(){
        if(this.state.loggedIN ==false){
            return (<Redirect to="/"/>);
        }
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />&nbsp;
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/car-parking.jpg" height="30" width="41" alt="Perfect Parking  Lot" />&nbsp;&nbsp;
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
                                    <NavLink className="nav-link" to="/team">
                                        <span className="fa fa-address-card fa-lg"></span>&nbsp;Team
                                    </NavLink>
                                </NavItem> 
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/userprofile">
                                        <span className="fa fa-user fa-lg"></span>&nbsp; Profile
                                         {/* <button onClick={this.handleLogout}>Logout</button> */}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="logout" navbar>
                                
                                   {/* / <DropD/> */}
                                <NavLink className="nav-link" to="/">
                                    <button type="button" className="btn btnlogout"  
                                            onClick={this.handleLogout}
                                            ><span className="fa fa-sign-out aa fa-lg"/> Logout</button> 
                                </NavLink>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>  
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 className="heading">Perfect Parking  Lot</h1>
                                <p className="heading">Rent your place for parking and make your city traffic free. Help people to find best parking slot and help to save time and to earn money too.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </>
        );
    }
}

export default Header;