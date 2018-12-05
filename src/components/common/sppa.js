import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import SPPAAsri from '../common/sppa-asri';
import SPPAOto from '../common/sppa-oto';



export default (props)=>{
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Form',
        grayBoxText:'SPPA',
        triangleDown:''
    }
    
    let currentProduct = props.match.params.productPackageName;
    let component = currentProduct.toLowerCase() === 'asri' ? 
                        <SPPAAsri nextURL={props.match.url.replace('sppa','building-image-capture')}/> : 
                        <SPPAOto nextURL={props.match.url.replace('sppa','vehicle-image-capture')}/>;
    
    return (
        <div className="col-sm-12 mb-5 content-adjuster">
            <HeaderFixContainer config={config} />
             {
                 component
             }               
            <FooterBackground />
        </div>
    )
}