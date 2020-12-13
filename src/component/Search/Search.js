import React, {Component} from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import {Input, Card, CardBody, CardTitle} from 'reactstrap';
import * as parkDate from "../MapPg/data/skateboard-parks.json";
import Header from '../Header/Header';

export default class SearchPg extends Component{

    state={
        search: ""
    }

    renderPark = park => {
        const { search } = this.state;
   //     var code = park.toLowerCase();
        
        return (
            <div className="onSearch" style={{ marginTop: "20px" }}>
              <Link to="/parkdetail"><p className="par">{park.properties.NAME}</p></Link>
              <hr/>
              <p className="parA">{park.properties.ADDRESS}</p>
              
            </div>
          );
        };
    onchange= e =>{
        this.setState({ search: e.target.value });
    };

    render(){

        const { search } = this.state;
        const filteredPark = parkDate.features.filter(park => {
          return park.properties.NAME.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return(
            <div className="co">
                <Header/>
            <div className="smainContainer">
                <div className="dataSearch">
                <h2 className="searchHead">-|Search|-</h2>
                    <div className="rowS"><span className="fa fa-search fa-lg"></span><p>&nbsp;&nbsp;</p>
                        <Input label="Search parking" icon="search" onChange={this.onchange} className="inputS" placeholder="Search parking name here..."/>
                    </div>
                </div>
                <div className="parkRow ">
                    {
                        filteredPark.map(park => {
                            return this.renderPark(park);
                        })   
                    }
                </div>
                {/* <div className="smap">
                    <button class="btn btn-info">
                        <Link to="/map" className="btnMap" >View in MAP </Link>                    
                    </button>    
                </div> */}
            </div>
            </div>
        );
    }
}