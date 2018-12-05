import React, { Component } from 'react';
import {render} from 'react-dom';
import Main from '../routes'
import MobileMenu from '../container/mobile-menu-container';


export default class App extends React.Component{
    
    render(){
        return(
            <div className="container-fluid h-100 no-padding">
                <MobileMenu />
                <Main />
            </div>
        );
    }
}
