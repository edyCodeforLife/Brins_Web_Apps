import React from 'react';
import HeaderFixContainer from '../components/common/header-fix-container';
import FooterBackground from '../components/common/footer-background';
import ImageCapture from '../components/common/image-capture';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveProductTemp } from '../action/product';
import ListDocumentCaptureModel from '../models/list-document-capture-model';
import ImageCaptureService from '../services/image-capture';


class BuildingImageCapture extends React.Component{
    
   nextURL = '';
   config = {}
   imageCaptureList = [];
   documentCaptureConstantList = [];
   documentCaptureList = [];
    constructor(props){
        super(props);
       
        this.nextURL = props.match.url.replace('building-image-capture','statement');
        this.config = {
            headerLogoText:'BRINS ASRI',
            blueBoxSmallNav:'Form',
            grayBoxText:'Informasi Bangunan',
            triangleDown:''
        }

        this.state = {
            product:this.props.product
        }

        this.imageCaptureList = this.props.match.params.productPackageName == 'asri' ? ImageCaptureService.getImageCaptureByID(1) : ImageCaptureService.getImageCaptureByID(2);
        
        this.documentCaptureConstantList = this.props.match.params.productPackageName == 'asri' ? ImageCaptureService.getImageCaptureConstantByID(1) : ImageCaptureService.getImageCaptureConstantByID(2);
       
    }

    componentWillMount(){
  
    }

    componentDidUpdate(){
        
        if(this.state.product.ListDocumentCaptureModel.length != 0){
            console.log(JSON.stringify(this.state.product));
        }
    }

    onFormSubmit = (e) => {
      e.preventDefault();
      let elements = e.target.elements;
      this.documentCaptureList = [];
      this.imageCaptureList.forEach(i => {
            let elements = document.querySelectorAll('.' + i.className);
            let listDocumentCapture = Object.assign({},ListDocumentCaptureModel);
          
            listDocumentCapture.Name = this.documentCaptureConstantList.filter(d => d[elements[0].innerText])[0][elements[0].innerText];
            listDocumentCapture.Image = elements[1].getAttribute('SRC');
            listDocumentCapture.Note = elements[3].value;

            this.documentCaptureList.push(listDocumentCapture);
      })

    
      this.setState({
            product:{
                ...this.state.product,
                ListDocumentCaptureModel:this.documentCaptureList
            }
        })        
    }

    onInputChange = (event) =>{
  
    }

    render(){
        return(
            <div className="col-sm-12 content-adjuster">
                <HeaderFixContainer config={this.config} />
                <form onSubmit={this.onFormSubmit}>
                {
                    this.imageCaptureList.map(i => (
                        <ImageCapture key={i.className} className={i.className} text={i.text} />
                    ))
                }
                    <div className="col-sm-12 text-center">
                        <button className="btn btn-login btn-yellow">Simpan</button>
                    </div>
                </form>
                <FooterBackground />
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
export default connect(mapStateToProps,mapDispatchToProps)(BuildingImageCapture);