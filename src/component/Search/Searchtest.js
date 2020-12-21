import React, {Component} from 'react';
import './Search.css';
 import { Link } from 'react-router-dom';
 import {Input, Card, CardBody, CardTitle} from 'reactstrap';
// import * as parkDate from "../MapPg/data/skateboard-parks.json";
import Header from '../Header/Header';

export default class SearchPgtest extends Component{

    // state={
    // }

    constructor(props){
        super(props);
        this.state={ 
                posts : [] ,
                search: ""
        };

        fetch('http://localhost:9001/parkselection') 
            .then(response =>{
                response.json();
            })
            .then((data) => console.log('This is your data', data))
            .then(data => this.setState({ posts: data }));
           // .then(posts => {
            //    this.setState({posts})
          //  })
           // .then( (err) => {
            //    console.log(err);
            //})
    }
    renderPark = park => {
        const { search } = this.state;
        return (
            <Link to="/parkdetail"><div className="onSearch" style={{ marginTop: "20px" }}>
              <p className="par">{park.park_name}</p>
              <hr/>
              <p className="parA">{park.address}</p>
              
            </div></Link>
          );
        };
    onchange= e =>{
        this.setState({ search: e.target.value });
    };

    render(){
        const { posts } = this.state;
        const { search } = this.state;
        const filteredPark = posts.filter(park => {
          return park.park_name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
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
{/* 
                <ul>
                {this.state.posts.map( post => 
                   (
                    <p>
                    {post.park_name}
                    {post.rate}
                 </p>
                   )
                    )}
                </ul> */}
                 
            </div>
        );
    }
    
}