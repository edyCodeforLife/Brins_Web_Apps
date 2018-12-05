import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveProductTemp } from '../action/product';



class SPPAOTO extends React.Component{
    
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
              AssuredName:this.state.login.Name,
              AssuredAddress:this.state.login.Address
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
                <input type="text" id="AssuredName" className="form-control" onChange={this.onInputChange} value={this.state.product.AssuredName}/>
            </div>
            <div className="form-group">
                <label htmlFor="coresspondentAddress">Alamat Korespondensi</label>
                <textarea rows="5" id="coresspondentAddress" className="form-control" defaultValue ={this.state.product.AssuredAddress} readOnly/>
            </div>
          
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="form-control" defaultValue ={this.state.login.Email} readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleBrand">Merek Kendaraan</label>
                <input type="text" id="vehicleBrand" className="form-control" defaultValue ={this.state.product.VehicleBrandName} readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleType">Type Kendaraan</label>
                <input type="text" id="vehicleType" className="form-control" defaultValue ={this.state.product.VehicleModelName} readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleSerial">Seri Kendaraan</label>
                <input type="text" id="VehicleSubModelName" className="form-control" onChange={this.onInputChange} value={this.state.product.VehicleSubModelName}/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleReleaseYear">Tahun Kendaraan</label>
                <input type="text" id="vehicleReleaseYear" className="form-control" defaultValue ={this.state.product.VehicleYear} readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="vehiclePlateNumber">Nomor Polisi</label>
                <input type="text" id="vehiclePlateNumber" className="form-control" defaultValue ={this.state.product.LicensePlatePrefix + ' - ' + this.state.product.LicensePlateInfix + ' - ' + this.state.product.LicensePlateSuffix} readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="vehicleColorSTNK">Warna kendaraan sesuai dengan STNK</label>
                <input type="text" id="VehicleColorName" className="form-control" onChange={this.onInputChange} value={this.state.product.VehicleColorName}/>
            </div>
            <div className="form-group">
                <label htmlFor="handphoneNo">No Handphone</label>
                <input type="text" id="handphoneNo" className="form-control" defaultValue ={this.state.login.MobilePhone} readOnly/>
            </div>
            <div className="form-group">
                <label htmlFor="VehicleFrameNumber">No Rangka</label>
                <input type="text" id="VehicleFrameNumber" className="form-control" onChange={this.onInputChange} value={this.state.product.VehicleFrameNumber}/>
            </div>
            <div className="form-group">
                <label htmlFor="VehicleEngineNumber">No Mesin</label>
                <input type="text" id="VehicleEngineNumber" className="form-control"  onChange={this.onInputChange} value={this.state.product.VehicleEngineNumber}/>
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
export default connect(mapStateToProps,mapDispatchToProps)(SPPAOTO);