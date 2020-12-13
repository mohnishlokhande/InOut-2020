import React from "react";
import { geolocated } from "react-geolocated";
import Gmap from "./MapPg/MapPg";
 
class Demo extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable ? (
            <div>Your browser does not support Geolocation</div>
        ) : !this.props.isGeolocationEnabled ? (
            <div>Geolocation is not enabled</div>
        ) : this.props.coords ? (
            
            <Gmap la={this.props.coords.latitude} lo={this.props.coords.longitude}/>
        ) : (
            <div>Getting the location data&hellip; </div>
        );
    }
}
 
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Demo);