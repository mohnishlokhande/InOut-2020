import React, {Component} from 'react';
import './HomePg.css';
import Car from '../Image/homeCar.png'
class Home extends Component{

    render(){
        return( 
            <div className="outerdivHome">
                <div className="cardho">
                    {/* <img src={Car} alt="car" /> */}
                </div>
                <br /><br />
                <button className="registerbtn"> Register</button>
            </div>
        );
    }
}


export default Home;