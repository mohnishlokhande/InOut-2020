import React, {Component} from 'react';
import './Select.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';



class Select extends Component{

    render(){
        return( 
            <div className="cont">
                <Header/>
            <div className="outerdivSel">
                <div className="smap">
                    <button class="btn btn-info">
                        <Link to="/search" className="btnMap" >Search By Name </Link>                    
                    </button>    
                </div>
                <div className="smap">
                    <button class="btn btn-info">
                        <Link to="/map" className="btnMap" >View In MAP </Link>                    
                    </button>    
                </div>
            </div>
            </div>
        );
    }
}


export default Select;