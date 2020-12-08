import React, {Component} from 'react';
import Home from './HomePg/HomePg';
import Register from './Register/Register';

import { Switch,Route, Redirect } from 'react-router-dom';
import Gmap from './MapPg/MapPg';

class Main extends Component {
    render(){
        return(
            <div>
                <Home/> 
                <Register/>
                <Gmap/>
            </div>
        );
    }
}

export default Main;