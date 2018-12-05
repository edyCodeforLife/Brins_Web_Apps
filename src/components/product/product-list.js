import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import LogoLeftDescription from '../common/logo-left-description';
import { Link } from 'react-router-dom';
import ProductService from '../../services/product';
import { Carousel } from 'react-responsive-carousel';

export default (props) => {
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Paket'

    }
    let productId = props.match.params.productId;
    let productPackages = ProductService.getProductByID(productId);
   
    return (
        <div className="col-sm-12 h-100">
            <HeaderFixContainer config={config} />

            <Carousel 
                className="h-100"
                showThumbs={false}
                showStatus={false}
            >
                {
                    productPackages.map((p) => (
                        
                        <div className="h-100" key={p.productName}>
                            <div className="col-sm-12 d-flex align-items-end justify-content-center text-center h-25">
                                <img src={p.productImage} className="product-image"/>
                            </div>
                            <div className="col-sm-12 d-flex flex-column align-items-center justify-content-center text-center h-10 product-header-text">
                                <h2>{p.productName}</h2>
                                <h5>{p.productHeaderText}</h5>
                            </div> 
                            <div className="col-sm-12 row d-flex justify-content-center text-center h-60">
                                <LogoLeftDescription data={p.productBenefits} />
                                <div className="col-sm-12 h-10 text-center">
                                <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={"/product/" + p.productPackageName + "/" + p.productName.toLowerCase() + "/form/start-page"}>Pilih</Link>
                            </div>
                            </div>
                           
                        </div>
                    ))
                }
                
              
            </Carousel>
        </div>
    )
}