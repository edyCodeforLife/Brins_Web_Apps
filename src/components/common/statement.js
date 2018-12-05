import React from 'react';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import productService from '../../services/product';
import { Link } from 'react-router-dom';
 
export default (props) =>{
    let currentProduct = props.match.params.productPackageName;
    let currentStatements = productService.getProductStatements(currentProduct);
    let nextURL = props.match.url.replace('statement','product-success');
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Dokumen',
        grayBoxText:'Pernyataan',
        triangleDown:''
    }

    return (
        <div className="col-sm-12 product-statement content-adjuster">
            <HeaderFixContainer config={config} />
            <div className="col-sm-12 d-flex flex-column align-items-center">
                <ol className="mt-5">
                
                    {
                        currentStatements.map((s) =>(
                            <li>{s}</li>
                        ))
                    }
                
                </ol>
                <div className="form-check align-self-start">
                    <input type="checkbox" className="form-check-input" id="agree" />
                    <label htmlFor="agree">Setuju</label>
                </div>
            </div>
           
         
                
                <div className="col-sm-12 text-center">
                    <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={nextURL}>Lanjut</Link>
                </div>
            
            <FooterBackground />
        </div>
    )
}