import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDiscount } from '../action/discount';
import { calculateProduct } from '../action/premi-asri';
import DiscountModel from '../models/discount-model';
import ProductModel from '../models/product-oto-model';
import ProductService from '../services/product';
import _ from 'lodash';
import PopUp from '../components/common/popup';

class PromoCode extends React.Component{
    
   nextURL = '';
   config = {}
   currentCoverageCode = '';
   productCode = '';
   isDiscountLoaded = false;
    constructor(props){
        super(props);
       
        this.nextURL = props.match.url.replace('promo-code','premi-ilustration');
        this.config = {
            headerLogoText:'BRINS ASRI',
            blueBoxSmallNav:'Form',
            grayBoxText:'Kode Promo',
            triangleDown:''
        }

        let currentCoverageCodeList = this.props.match.params.productPackageName == 'asri' ? ProductService.getCoverageCode(1) : ProductService.getCoverageCode(2);
       
        this.currentCoverageCode = currentCoverageCodeList.filter(c => c[this.props.match.params.productPackageName + this.props.match.params.productName])[0][this.props.match.params.productPackageName + this.props.match.params.productName];
     
        this.productCode = ProductService.getProductCode(this.props.match.params.productPackageName);
        
        this.state = {
            isPromoCode : false,
            discountModel:DiscountModel
        }

        
    }

    componentDidUpdate(){
      

        if(!_.isEmpty(this.props.discount) && !this.isDiscountLoaded){
            this.isDiscountLoaded = true;
            this.props.product.ProductCode = this.productCode;
            this.props.product.CoverageCode = this.currentCoverageCode;
            this.props.product.DiscountCode = this.props.discount.Code;
            this.props.product.DiscountCurrency = this.props.discount.Currency;
            this.props.product.DiscountPercent = this.props.discount.ValuePercent;
        
            this.props.calculateProduct(this.props.product,this.props.match.params.productPackageName);
            
            this.props.history.push(this.nextURL);
        }
    }

    onCheckedChange = (event) => {
       
        this.setState({
            [event.target.id]: event.target.value == 'false' ? true : false
        })
    }

    onInputChange = (event) =>{
        this.setState({
            discountModel:{
                ...this.state.discountModel,
                [event.target.id] : event.target.value
            }
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
      
        this.state.discountModel.CoverageCode =  this.currentCoverageCode;
        this.state.discountModel.ProductCode = this.productCode;
        this.state.discountModel.Reserved = "1";

        if(this.state.isPromoCode){
            this.props.getDiscount(this.state.discountModel);
        }else{
            this.props.history.push(this.nextURL);
        }
    }

    render(){
        return(
            <div className="col-sm-12 content-adjuster">
                <HeaderFixContainer config={this.config} />
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-check">
                        <input type="checkbox" className="width-20 form-check-input" id="isPromoCode" defaultChecked={this.state.isPromoCode} onChange={this.onCheckedChange} value={this.state.isPromoCode}/>
                        <label htmlFor="isPromoCode">Gunakan Kode Promo</label>
                    </div>
                    <div className="form-group">
                    
                        <input type="text" id="Code" placeholder="Masukkan kode promo" className="form-control" onChange={this.onInputChange} disabled={!this.state.isPromoCode} value={this.state.discountModel.Code}/>
                    </div>
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-login btn-yellow">Lanjut</button>
                        
                    </div>
                </form>
            </div>
        )
    }
  
}


function mapStateToProps({product,discount,premiASRI}){
    return {product,discount,premiASRI};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getDiscount,calculateProduct},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PromoCode);