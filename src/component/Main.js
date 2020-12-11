import React, {Component} from 'react';
import Home from './HomePg/HomePg';
import Register from './Register/Register';
// import login from './login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import Demo from './enablelocation';
class Main extends Component {
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={Register} />
                <Route path="/enablelocation" component={Demo} />
                <Route path="/login" component={Login} />
            
            </Switch>
        </BrowserRouter>
        );
    }
}

export default Main;