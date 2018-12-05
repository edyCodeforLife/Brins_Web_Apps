import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveProductTemp } from '../action/product';



class SPPAASRI extends React.Component{
    
   nextURL = '';
   config = {}
   isPremiASRILoaded = false;
    constructor(props){
        super(props);
       
        this.nextURL = this.props.originalProps.match.url.replace('sppa','building-image-capture');
        this.config = {
            headerLogoText:'BRINS ASRI',
            blueBoxSmallNav:'Form',
            grayBoxText:'SPPA',
            triangleDown:''
    
        }

        this.state = {
            product:this.props.product,
            login:this.props.login.Data
        }
       
        console.log(this.props);
    }

    componentWillMount(){
      this.setState({
          product:{
              ...this.state.product,
              AssuredName:this.state.login.Name
          }
      })
    }

    componentDidUpdate(){
        console.log(this.props)
    }

    onFormSubmit = (e) => {
      e.preventDefault();
     
      this.props.saveProductTemp(this.state.product);
      this.props.originalProps.history.push(this.nextURL);
        
    }

    onInputChange = (event) =>{
        this.setState({
            product:{
                ...this.state.product,
                [event.target.id] : event.target.value
            }
        })
    }

    render(){
        return(
            <div className="col-sm-12 content-adjuster">
                <HeaderFixContainer config={this.config} />
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nama</label>
                        <input type="text" id="name" className="form-control" onChange={this.onInputChange} defaultValue ={this.state.product.AssuredName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="coresspondentAddress">Alamat Korespondensi</label>
                        <textarea rows="5" id="coresspondentAddress" className="form-control" defaultValue ={this.state.product.AssuredAddress} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="riskLocationAddress">Alamat lokasi risiko</label>
                        <textarea rows="5" id="riskLocationAddress" className="form-control" defaultValue ={this.state.product.BuildingAddress} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="form-control" defaultValue ={this.state.login.Email} readOnly/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="handphoneNo">No Handphone</label>
                        <input type="text" id="handphoneNo" className="form-control" defaultValue ={this.state.login.MobilePhone} readOnly/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="width-20 form-check-input" id="BuildingNearMarket" onChange={this.onInputChange} value={this.state.product.BuildingNearMarket}/>
                        <label htmlFor="buidlingLocationNotAtMarket">Bangunan tidak dilokasi pasar</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="width-20 form-check-input" id="BuildingWorkPlace"  onChange={this.onInputChange} value={this.state.login.BuildingWorkPlace}/>
                        <label htmlFor="buildingNotForBusiness">Bangunan tidak untuk usaha</label>
                    </div>
                
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-login btn-yellow">Lanjut</button>
                    </div>
                </form>
            </div>
        )
    }
  
}


function mapStateToProps({login,product}){
    return {login,product};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({saveProductTemp},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(SPPAASRI);