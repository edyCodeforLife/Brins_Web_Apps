import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import InformationBox from '../components/common/information-box';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProvinceAndCityByPostalCode } from '../action/lookup';
import { saveProductTemp } from '../action/product';
import { saveLogin } from '../action/auth';
import PostalModel from '../models/postal-model';
import ProvinceModel from '../models/province-model';
import CityModel from '../models/city-model';
import ProductAsriModel from '../models/product-asri-model';
import PopUp from '../components/common/popup';

class BuildingInformation extends React.Component{
   nextURL = '';
   config = {};
   popupConfig = {};
   informationConfig = '';
   searchPostalCode = false;
   
    constructor(props){
       super(props);
       
        this.nextURL = props.originalProps.match.url.replace('start-page','promo-code');
        this.config = {
            headerLogoText:'BRINS ASRI',
            blueBoxSmallNav:'Form',
            grayBoxText:'Informasi Bangunan',
            triangleDown:''
            }
        this.informationConfig = {
            headerText:'Information',
            description:'Periode asuransi berlaku satu tahun jam 12:00 siang waktu setempat sejak tanggal pembayaran.'
        }

        this.popupConfig = {
            popupID : 'id' + new Date().getTime(),
            headerText : 'Notifikasi',
            bodyText : '',
            imgSrc : '/src/images/fail.png',
            buttonOKText :['OK'],
            visible:false
        }

        this.state = {
            postalModel:PostalModel,
            PostalCode:PostalModel,
            City:CityModel,
            Province:ProvinceModel,
            productAsriModel:ProductAsriModel
        }
    }

    componentWillMount(){
      
    }
    componentDidUpdate(prevProps,prevStates){
       console.log( this.props);
      if(this.props.lookup){
            if(this.props.lookup.postalCode){
                if(this.props.lookup.postalCode.data && this.searchPostalCode){
                    this.popupConfig.visible = true;
                    this.popupConfig.bodyText = this.props.lookup.postalCode.data.MessageContent;
                    this.searchPostalCode = false;
                    this.setState({
                        PostalCode:PostalModel,
                        City:CityModel,
                        Province:ProvinceModel,
                    })

                }else if(this.props.lookup.postalCode && this.state.PostalCode.Code != this.state.postalModel.Code && this.searchPostalCode){
                    this.setState({
                        PostalCode:this.props.lookup.postalCode.PostalCode,
                        City:this.props.lookup.postalCode.City,
                        Province:this.props.lookup.postalCode.Province
                    })
                    this.searchPostalCode = false;
                }
            }    
        }    
    }

    hidePopup = (e) => {
        this.showPopup = false;
        this.popupConfig.visible = false;
    }

    onInputChange = (event) =>{
        this.setState({
            productAsriModel:{
                ...this.state.productAsriModel,
                [event.target.id] : event.target.value
            }
        })
    }

    onInputPostalChange = (event) =>{
        this.setState({
            postalModel:{
                ...this.state.postalModel,
                [event.target.id] : event.target.value
            }
        })
    }

    onPostalCodeCheckClick = (e) => {
        e.preventDefault();
        this.searchPostalCode = true;
        this.props.getProvinceAndCityByPostalCode(this.state.postalModel);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.state.productAsriModel.PostalCode = this.state.PostalCode.Code;
        this.state.productAsriModel.ProvinceCode = this.state.Province.Code;
        this.state.productAsriModel.CityCode = this.state.City.Code;

        this.props.saveProductTemp(this.state.productAsriModel);

        this.props.originalProps.history.push(this.nextURL);
    }

    render(){
        return (
            <div className="col-sm-12 content-adjuster">
                <HeaderFixContainer config={this.config}/>
                    <PopUp config={this.popupConfig} hidePopup={this.hidePopup}/>
               
                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="productASRIBuildingPrice">Harga bangunan</label>
                            <input type="text" id="BuildingValue" className="form-control" onChange={this.onInputChange} value={this.state.productAsriModel.BuildingValue}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productASRIEquipmentPrice">Harga perlengkapan</label>
                            <input type="text" id="InteriorValue" className="form-control" onChange={this.onInputChange} value={this.state.productAsriModel.InteriorValue}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productASRICorespondenseAddress">Alamat korespondensi</label>
                            <textarea rows="5" id="AssuredAddress" placeholder="Silahkan isi alamat" className="form-control" onChange={this.onInputChange} value={this.state.productAsriModel.AssuredAddress}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="productASRIRiskLocationAddress">Alamat lokasi risiko</label>
                            <div className="form-check">
                                <input type="checkbox" className="width-20 form-check-input" id="productASRIRiskLocationAddressSame"/>
                                <label htmlFor="productASRICorespondenseAddress">Sama Dengan Alamat Korespondensi</label>
                            </div>
                            <textarea rows="5" id="BuildingAddress" placeholder="Silahkan isi alamat lokasi risiko" className="form-control" onChange={this.onInputChange}  value={this.state.productAsriModel.BuildingAddress} />
                        </div>
                      
                        <div className="form-group">
                            <label htmlFor="productASRIPostalCode">Kode Pos</label>
                            <div className="row">
                                <input id="Code" placeholder="Silahkan isi kode pos" className="form-control col-sm-8" onChange={this.onInputPostalChange} value={this.state.postalModel.Code}/>
                                <div className="col-sm-4 text-right">
                                    <button type="button" className="btn btn-postal btn-yellow" onClick={this.onPostalCodeCheckClick}>Check</button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postalCodeDescription">Deskripsi</label>
                            <input type="text" id="productASRIBuildingPrice" className="form-control" value={this.state.PostalCode.Name} disabled/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postalCodeCity">Kota</label>
                            <input type="text" id="postalCodeCity" className="form-control" value={this.state.City.Name} disabled/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="postalCodeProvince">Provinsi</label>
                            <input type="text" id="postalCodeCity" className="form-control" value={this.state.Province.Name} disabled/>
                        </div>
                        <div className="form-group">
                            <InformationBox config={this.informationConfig} />
                        </div>
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-login btn-yellow">Lanjut</button>
                            
                        </div>
                    </form>
                    
                <FooterBackground />
            </div>
        )
    }
}


function mapStateToProps({login,lookup,product}){
    return {login,lookup,product};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getProvinceAndCityByPostalCode,saveProductTemp,saveLogin},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BuildingInformation);