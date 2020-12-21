import React, {Component} from 'react';
import './Search.css';
// import { Link } from 'react-router-dom';
// import {Input, Card, CardBody, CardTitle} from 'reactstrap';
// import * as parkDate from "../MapPg/data/skateboard-parks.json";
// import Header from '../Header/Header';

export default class SearchPgtest extends Component{

    // state={
    // }

    constructor(props){
        super(props);
        this.state={ 
                posts : [] ,
                // search: ""
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
        
    render(){
        return(
            <div>
                <ul>
                {this.state.posts.map( post => 
                   (
                    <p>
                    {post.park_name}
                    {post.rate}
                 </p>
                   )
                    )}
                </ul>
                 
            </div>
        )
    }
    
}