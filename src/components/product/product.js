import React from 'react';
import Constants from '../../constants/product';
import BlueBoxMedium from '../common/blue-box-medium';
import ProductBox from '../common/product-box';

export default (props) =>{
    return (
        <div className="col-sm-12 h-100">
            <BlueBoxMedium />
            <ProductBox headerText="Brins Asri" 
                        bodyText={Constants.ASRI_PRODUCT_DESCRIPTION}
                        imgSrc="/src/images/product_asri.png"
                        productLink={Constants.ASRI_PRODUCT_LINK} />
            <ProductBox headerText="Brins Oto" 
                        bodyText={Constants.OTO_PRODUCT_DESCRIPTION} 
                        imgSrc="/src/images/product_oto.png"
                        productLink={Constants.OTO_PRODUCT_LINK}/>
        </div>
    )
}