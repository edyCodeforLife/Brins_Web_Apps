import React from 'react';
import { Link } from 'react-router-dom';

export default (props) =>{
    function onLinkClick(e){
      
        let parentButton = document.querySelector('.btn-close-sidemenu');
        parentButton.click();
      
    }
   
    return (
        <Link to={props.menuList.path} key={props.menuList.path} onClick={onLinkClick} className="nav-link">{props.menuList.text}</Link>
    )
}