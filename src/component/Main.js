import React, {Component} from 'react';
import Home from './HomePg/HomePg';
import Register from './Register/Register';

import { Switch,Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                 <Home/> 
                <Register/>
            </div>
        );
    }
}

export default Main;