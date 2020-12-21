import React, {Component} from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import {Input, Card, CardBody, CardTitle} from 'reactstrap';
import * as parkDate from "../MapPg/data/skateboard-parks.json";
import Header from '../Header/Header';

export default class SearchPg extends Component{

    // state={
    // }

    constructor(props){
        super(props);
        this.state={ 
                posts : [] ,
                search: ""
        };

        fetch('http://localhost:9001/parkselection/')
            .then(response =>{
                response.json();
            })
            .then(posts => {
                this.setState({posts})
            })
            .then( (err) => {
                console.log(err);
            })
        }


    renderPark = park => {
        const { search } = this.state;
   //     var code = park.toLowerCase();
        
        return (
            <Link to="/parkdetail"><div className="onSearch" style={{ marginTop: "20px" }}>
              <p className="par">{park.properties.NAME}</p>
              {/* <p className="par">{park.properties.NAME}</p> */}
              <hr/>
               {/* <Card>
                <CardBody>
                  <p className="">
                    <img
                      src={blankImg}
                      className={"flag flag-" + code}
                      alt={{park.properties.NAME}}
                    />
                  </p> 
                  <CardTitle title={park.properties.NAME}>{park.properties.NAME}
                  </CardTitle>
                </CardBody>
              </Card> */}
              <p className="parA">{park.properties.ADDRESS}</p>
              
            </div></Link>
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