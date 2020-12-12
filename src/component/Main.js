import React, {Component} from 'react';
import Home from './HomePg/HomePg';
import Register from './Register/Register';
// import login from './login/login';

import { Switch,Route, Redirect } from 'react-router-dom';
import Gmap from './MapPg/MapPg';

import Login from './login/login';
import SearchPg from './Search/Search';

class Main extends Component {
    render(){
        return(
            <div>
                <Home/> 
                <Register/>
                <Gmap/> 
            
                <Login />
                <SearchPg/>
            </div>
        );
    }
}

export default Main;