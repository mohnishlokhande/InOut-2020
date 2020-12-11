import React, {Component} from 'react';
import './HomePg.css';
import Car from '../Image/car.png'
import Logo from '../Image/logo.png'
import { Link } from 'react-router-dom';
class Home extends Component{

    render(){
        return( 
            <div className="outerdivHome">
                <div className="cardho">
                    <div className="logodiv"><img src={Logo} alt="logo" /></div>
                    <div className="parkingdetails"> 
                    <h1>
                        Perfect Parking  lot
                    </h1>
                    <p>Rent your place for parking and make your city traffic free. Help people to find best parking slot and help to save time and to earn money too.</p>
                    </div>   
                    <br />
                    <div className="btndiv">
                        <button><Link to="/register" style={{textDecoration:'none'}}>Register</Link></button>
                        <button><Link to="/login" style={{textDecoration:'none'}} >Login </Link></button>    
                    </div>                 
                </div>
                <div className="carpic">
                    <img src={Car} alt="car" />
                </div>
            </div>
        );
    }
}


export default Home;