import React from 'react';
import { Link } from 'react-router-dom';

export default (props)=>{
    return (
        <div className="col-sm-12 d-flex align-items-center p-5 product-box">
            <div className="col-sm-3 text-center">
                <img src={props.imgSrc} className="product-image" />
            </div>
            <div className="col-sm-9">
                <h3 className="product-header-text">{props.headerText}</h3>
                <div className="product-body-text">{props.bodyText}</div>
                <button className="btn btn-product btn-yellow mt-2" type="button"><Link to={props.productLink} className="link-button">Pilih</Link></button>
            </div>
        </div>
    )
}