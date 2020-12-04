import React, {Component} from 'react';
import Home from './HomePg/HomePg';

import { Switch,Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <Home/>
            </div>
        );
    }
}

export default Main;