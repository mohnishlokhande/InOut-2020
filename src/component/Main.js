import React, {Component} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Pathways from './Pathways/Pathways';
import Methodology from './Methodology/Methodology';
import About  from './About/Aboutus';
import About2  from './About/Aboutus2';
import About3  from './About/Aboutus3';
import About4  from './About/Aboutus4';
import About5  from './About/Aboutus5';
import Contact from './Contact/ContactUs';
import { Switch,Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Pathways} />
                    <Route path="/pathways" component={Pathways} />
                    <Route path="/metho" component={Methodology} />
                    <Route path="/about" component={About} />
                    <Route path="/about2" component={About2}/>
                    <Route path="/about3" component={About3}/>
                    <Route path="/about4" component={About4}/>
                    <Route path="/about5" component={About5}/>
                    <Route path="/contactus" component={Contact}/>
                    <Redirect to="/pathways" />  
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;