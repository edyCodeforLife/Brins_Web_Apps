import React from 'react';
import HeaderLogo from '../common/header-logo';
import BlueBoxSmallNav from '../common/blue-box-small-nav';
import GrayBox from '../common/gray-box';
import TriangleDown from '../common/triangle-down';

export default (props)=> {
   
    let headerLogo = props.config.headerLogoText ? <HeaderLogo text={props.config.headerLogoText}/> : null;
    let blueBoxSmallNav = props.config.blueBoxSmallNav ? <BlueBoxSmallNav text={props.config.blueBoxSmallNav}/> : null;
    let grayBox = props.config.grayBoxText ? <GrayBox text={props.config.grayBoxText}/> : null;
    let triangleDown =  props.config.triangleDown == "" ? <TriangleDown /> : null;


    return (
        <div className="col-sm-12 h-20 header-fix-container">
        {
            headerLogo
        }
        {
            blueBoxSmallNav
        }
        {
            grayBox
        }
        {
            triangleDown
        }
          
         
        </div>
    )
}