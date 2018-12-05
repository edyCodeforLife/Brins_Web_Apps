import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveProductTemp } from '../action/product';



class PremiIlustration extends React.Component{
    
   nextURL = '';
   config = {}
   isPremiASRILoaded = false;
    constructor(props){
        super(props);
       
        this.nextURL = props.match.url.replace('premi-ilustration','sppa');
        this.config = {
            headerLogoText:'BRINS ASRI',
            blueBoxSmallNav:'Ilustrasi',
            grayBoxText:'Ilustrasi Premi',
            triangleDown:''
    
        }

        this.state = {
            product:this.props.product,
            discount:0,
            administrationFee:0
        }
       
    }

    componentWillMount(){
      
    }

    componentDidUpdate(){
        console.log(this.props);
        if(this.props.premiASRI && !this.isPremiASRILoaded){
            this.isPremiASRILoaded = true;
            let totalPremiBuildingAndInterior = 0;
            let discount = 0;
            let administrationFee = 0;
            for(let premi in this.props.premiASRI){
                console.log(this.props.premiASRI[premi]);
                totalPremiBuildingAndInterior += parseInt(this.props.premiASRI[premi].PremiBasic);
                administrationFee = parseInt(this.props.premiASRI[premi].Administration);
            }

            discount = parseInt((parseInt(this.props.discount.ValuePercent) / 100) * totalPremiBuildingAndInterior);

            this.setState({
                product:{
                    ...this.state.product,
                    Premi:totalPremiBuildingAndInterior,
                    TotalPremi:totalPremiBuildingAndInterior - discount + administrationFee
                },
                discount:discount,
                administrationFee:administrationFee
            })


        }
    }

   
    

    onFormSubmit = (e) => {
      e.preventDefault();
      this.props.saveProductTemp(this.state.product);
      this.props.history.push(this.nextURL);
    }

    render(){
        return(
            <div className="col-sm-12 content-adjuster">
                <HeaderFixContainer config={this.config} />
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="basicPremium">Premi Dasar</label>
                        <input type="text" id="basicPremium" className="form-control" value={this.state.product.Premi} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="discount">Discount</label>
                        <input type="text" id="discount" className="form-control" value={this.state.discount} disabled/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="administrationCost">Biaya Admin</label>
                        <input type="text" id="administrationCost" className="form-control" value={this.state.administrationFee} disabled/>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label htmlFor="premiumTotal">Total Premi</label>
                        <input type="text" id="premiumTotal" className="form-control" value={this.state.product.TotalPremi} disabled/>
                    </div>
                    <div className="col-sm-12 text-center">
                        <button  className="btn btn-login btn-yellow">Konfirmasi</button>
                    </div>
                </form>
                <FooterBackground />
            </div>
        )
    }
  
}


function mapStateToProps({product,discount,premiASRI}){
    return {product,discount,premiASRI};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveProductTemp},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(PremiIlustration);