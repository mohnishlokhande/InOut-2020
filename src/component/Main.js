import React, {Component} from 'react';
import Home from './HomePg/HomePg';
import Register from './Register/Register';
// import login from './login/login';

// import { Switch,Route, Redirect } from 'react-router-dom';
import Login from './login/login';

class Main extends Component {
    render(){
        return(
            <div>
                 <Home/> 
                <Register/>
                <Login />
                </div>
        );
    }
}

export default Main;