import React, {Component} from 'react';
import './Select.css';
import { Link } from 'react-router-dom';


class ParkMap extends Component{

    render(){
        return( 
            <div className="parkbox">
                <Gmap la={this.props.coords.latitude} lo={this.props.coords.longitude}/>
            </div>
        );
    }
}


export default ParkMap;