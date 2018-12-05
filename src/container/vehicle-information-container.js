import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import InformationBox from '../components/common/information-box';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveProductTemp } from '../action/product';
import { getVehicleBrand,getVehicleModel,getLicenseType,getRegions } from '../action/lookup';
import VehicleModel from '../models/vehicle-model-model';
import ProductOTOModel from '../models/product-oto-model';

class VehicleInformation extends React.Component{
    
   nextURL = '';
   config = {}
   informationConfig = {};
   vehicleBrands = [];
   vehicleModel = [];
   licensePlates = [];
   regions = [];
   vehicleYears = [];
   constructor(props){
        super(props);
       
        this.nextURL = props.originalProps.match.url.replace('start-page','promo-code');
        this.config = {
            headerLogoText:'BRINS OTO',
            blueBoxSmallNav:'Form',
            grayBoxText:'Informasi Kendaraan',
            triangleDown:''
        }
    
        this.informationConfig = {
            headerText:'Informasi',
            description:'Periode asuransi berlaku satu tahun jam 12:00 siang waktu setempat sejak tanggal pembayaran.'
        }
    
        this.state = {
            vehicleBrands:[],
            vehicleModel:[],
            licensePlates:[],
            regions:[],
            productOTOModel:Object.assign({},ProductOTOModel)
        }

       
    }

    componentWillMount(){
        this.props.getVehicleBrand();
        this.props.getLicenseType();
        this.props.getRegions();
        
        let currentYear = new Date().getFullYear();

        for (let i = currentYear; i >= currentYear - 14; i--) {
           this.vehicleYears.push(<option key={i} value={i}>{i}</option>);
        }
        this.setState({
            productOTOModel:{
                ...this.state.productOTOModel,
                VehicleYear:currentYear.toString()
            }
        })

    }

    componentDidUpdate(prevProps,prevState){
     
        if(this.vehicleBrands.length == 0 && this.props.lookup.vehicleBrands){
          
            this.props.lookup.vehicleBrands.map(vb => {
                this.vehicleBrands.push( <option key={vb.ID} value={vb.Code}>{vb.Name}</option>)
            })

            VehicleModel.Code = this.props.lookup.vehicleBrands[0].Code;
         
            this.props.getVehicleModel(VehicleModel);
            this.setState({
                vehicleBrands:this.vehicleBrands,
                productOTOModel:{
                    ...this.state.productOTOModel,
                    VehicleBrandCode: this.props.lookup.vehicleBrands[0].Code,
                    VehicleBrandName: this.props.lookup.vehicleBrands[0].Name
                }
            })
        }

        if(this.vehicleModel.length == 0 && this.props.lookup.vehicleModel){
           
            this.props.lookup.vehicleModel.map(vm => {
              
                this.vehicleModel.push(<option key={vm.Code} value={vm.Code} vehicle-type-code={vm.VehicleTypeCode} vehicle-type-name={vm.VehicleTypeName}>{vm.Name}</option>)
            })

            this.setState({
                vehicleModel:this.vehicleModel,
                productOTOModel:{
                    ...this.state.productOTOModel,
                    VehicleModelCode: this.props.lookup.vehicleModel[0].Code,
                    VehicleModelName: this.props.lookup.vehicleModel[0].Name,
                    VehicleTypeCode:this.props.lookup.vehicleModel[0].VehicleTypeCode,
                    VehicleTypeName:this.props.lookup.vehicleModel[0].VehicleTypeName
                }
            })
        }

        if(this.vehicleBrands.length > 0 && prevState.productOTOModel.VehicleBrandCode != this.state.productOTOModel.VehicleBrandCode){
            this.vehicleModel = [];
          
            VehicleModel.Code = this.state.productOTOModel.VehicleBrandCode;
            this.props.getVehicleModel(VehicleModel);
        }

        if(this.licensePlates.length == 0 && this.props.lookup.licensePlates){
          
            this.props.lookup.licensePlates.map(lt => {
                this.licensePlates.push(<option key={lt.CityCode} value={lt.LicensePrefix}>{lt.LicensePrefix}</option>)
            })

          
            this.setState({
                licensePlates:this.licensePlates,
                productOTOModel:{
                    ...this.state.productOTOModel,
                    LicensePlatePrefix: this.props.lookup.licensePlates[0].LicensePrefix
                }
            })
        }

        if(this.regions.length == 0 && this.props.lookup.regions){
            this.props.lookup.regions.map(r => {
                this.regions.push(<option key={r.Code} value={r.Code}>{r.Name}</option>)
            })

          
            this.setState({
                regions:this.regions,
                productOTOModel:{
                    ...this.state.productOTOModel,
                    RegionCode: this.props.lookup.regions[0].Code
                }
            })
        }

    }

    onInputChange = (event) =>{
        this.setState({
            productOTOModel:{
                ...this.state.productOTOModel,
                [event.target.id] : event.target.value
            }
        })
    }

    onSelectChange = (event) => {
        this.setState({
            productOTOModel:{
                ...this.state.productOTOModel,
                [event.target.id] : event.target.value
            }
        })
    }

    onCheckedChange = (event) => {
      
        this.setState({
            productOTOModel:{
                ...this.state.productOTOModel,
                [event.target.name] : event.target.value == 'true'
            }
        })
    }

    onVehicleBrandChange = (e) => {
        let index = e.target.selectedIndex;
        let optionText = e.target[index].text;
        this.setState({
            productOTOModel:{
                ...this.state.productOTOModel,
                VehicleBrandCode:e.target.value,
                VehicleBrandName:optionText
            }
        })
        
        

    }

    onVehicleModelChange = (e) => {
     
        let index = e.target.selectedIndex;
        let optionText = e.target[index].text;
      
        this.setState({
            productOTOModel:{
                ...this.state.productOTOModel,
                VehicleModelCode:e.target.value,
                VehicleModelName:optionText,
                VehicleTypeCode:e.target.getAttribute('vehicle-type-code'),
                VehicleTypeName:e.target[index].getAttribute('vehicle-type-name')
            }
        })
    }

    onFormSubmit = (e) => {
      e.preventDefault();
        this.props.saveProductTemp(this.state.productOTOModel);
        
        this.props.originalProps.history.push(this.nextURL);
     }

  
    render(){
        return(
            <div className="col-sm-12 mb-5 content-adjuster">
            <HeaderFixContainer config={this.config} />
            <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="vehicleBrand">Merek Kendaraan</label>
                        <select id="vehicleBrand" className="form-control"  onChange={this.onVehicleBrandChange}>
                            {
                                this.state.vehicleBrands
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleType">Type Kendaraan</label>
                        <select id="vehicleModel" className="form-control" onChange={this.onVehicleModelChange}>
                            {
                                this.state.vehicleModel
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="VehicleValue">Harga kendaraan</label>
                        <input type="text" id="VehicleValue" className="form-control" onChange={this.onInputChange} value={this.state.productOTOModel.VehicleValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleNumber">Nomor Polisi</label>
                        <div className="row">
                            <select id="LicensePlatePrefix" className="col-sm-4 form-control" onChange={this.onSelectChange}>
                            {
                                this.state.licensePlates
                            }
                            </select>
                            <input type="text" id="LicensePlateInfix" className="col-sm-4 form-control" onChange={this.onInputChange} value={this.state.productOTOModel.LicensePlateInfix}/>
                            <input type="text" id="LicensePlateSuffix" className="col-sm-4 form-control" onChange={this.onInputChange} value={this.state.productOTOModel.LicensePlateSuffix}/>
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleYearRelease">Tahun Kendaraan</label>
                        <select id="VehicleYear" className="form-control" onChange={this.onSelectChange}>
                        {
                            this.vehicleYears
                        }
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="RegionCode">Wilayah Penggunaan Kendaraan</label>
                        <select id="RegionCode" className="form-control" onChange={this.onSelectChange}>
                        {
                            this.regions
                        }
                        </select>
                    </div>
                    <div className="col-sm-12 form-group">
                        <label htmlFor="vehicleUseArea">Bengkel authorized (penggunaan bengkel authorized dikenakan tambahan premi)</label>
                        <div className="col-sm-6 form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="AuthorizedWorkshop" id="AuthorizedWorkshopYes" onChange={this.onCheckedChange} defaultChecked={this.state.AuthorizedWorkshop} value={true} checked={this.state.productOTOModel.AuthorizedWorkshop} />
                            <label className="form-check-label" htmlFor="authorizedWorkshopYes">Ya</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="AuthorizedWorkshop" id="AuthorizedWorkshopNo" onChange={this.onCheckedChange} value={false} checked={!this.state.productOTOModel.AuthorizedWorkshop} />
                            <label className="form-check-label" htmlFor="authorizedWorkshopNo">Tidak</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="vehicleUseArea">Perlengkapan Non Standar</label>
                        <textarea rows="5" id="VehicleEquipmentNonStandard" placeholder="Silahkan isi alamat lokasi risiko" className="form-control" onChange={this.onInputChange} value={this.state.productOTOModel.VehicleEquipmentNonStandard}/>
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


function mapStateToProps({login,product,lookup}){
    return {login,product,lookup};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getVehicleBrand,getVehicleModel,getLicenseType,getRegions,saveProductTemp},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(VehicleInformation);