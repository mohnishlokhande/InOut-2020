import React, {Component} from 'react';
import Home from './HomePg/HomePg';
import Register from './Register/Register';
// import login from './login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import Demo from './enablelocation';
import Gmap from './MapPg/MapPg';
import SearchPg from './Search/Search';
import Select from './Select/Select';
import Parkdetail from './parkingDetail/parks';
import SellerReg from './SellerReg/SellerReg';
import Profile from './UserProfile/Profile';
import Contactus from './contactus/contactus';
// import AllBookings from './parkingDetail/booking';
// import CheckAvailability from './checkavailability';
import BookNow from './parkingDetail/booking';
import SearchPgtest from './Search/Searchtest';

class Main extends Component {
    render(){

        // const Maploc = () => {
        //     return(
        //       <Gmap 
        //         la={this.props.coords.latitude}
        //         lo={this.props.coords.longitude}
        //       />
        //     );
        // };

        return(
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={Register} />
                <Route path="/map" component={Demo} />  
                <Route path="/login" component={Login} />
                {/* <Route path="/mapOrig" component={Gmap} /> */}
                <Route path="/search" component={SearchPg} />
                <Route path="/searchtest" component={SearchPgtest} />
                <Route path="/select" component={Select} />
                <Route path="/parkdetail" component={Parkdetail} />
                <Route path="/SellerReg" component={SellerReg} />
                <Route path="/userprofile" component={Profile} />
                {/* <Route path="/logintest" component = {Logintest} />  */}
                <Route path="/team" component={Contactus} />
                <Route path="/booking" component={BookNow} />
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Main;