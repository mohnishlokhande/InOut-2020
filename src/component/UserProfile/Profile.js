import React from 'react';
import { Component } from 'react';
import Header from '../Header/Header';
import './Profile.css';
import { Link } from 'react-router-dom';

export default class Profile extends Component{


    render(){
        return(
            <>
                <div className="contselect">
                    <Header/>
                    <div className="outerdivSel">
                        <h3>My name is Mr.X</h3>
                    </div>
                </div>
            </>
        );
    }
}