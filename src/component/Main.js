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
import Profile from './UserProfile/Profile';

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
                <Route path="/mapOrig" component={Gmap} />
                <Route path="/search" component={SearchPg} />
                <Route path="/select" component={Select} />
                <Route path="/userprofile" component={Profile} />
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Main;