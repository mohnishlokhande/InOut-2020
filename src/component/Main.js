import React, {Component} from 'react';
import Home from './HomePg/HomePg';
import Register from './Register/Register';
// import login from './login/login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login/login';
import Demo from './enablelocation';
import Gmap from './MapPg/MapPg';
import SearchPg from './Search/Search';
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
                <Route path="/enablelocation" component={Demo} />  
                <Route path="/login" component={Login} />
                <Route path="/mapG" component={Gmap} />
                <Route path="/search" component={SearchPg} />

            </Switch>
        </BrowserRouter>
        );
    }
}

export default Main;