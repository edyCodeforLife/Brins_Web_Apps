import React from 'react';
import ImageCapture from './image-capture';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import { Link } from 'react-router-dom';
export default (props)=>{
    console.log(props);
    let nextURL = props.match.url.replace('building-image-capture','statement');
    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Form',
        grayBoxText:'Informasi Bangunan',
        triangleDown:''
    }
    let imageCaptureList = [
        {id:'imageCapture1',textAreaId:'textArea1',text:'Tampak Depan'},
        
        {id:'imageCapture2',textAreaId:'textArea2',text:'Tampak Belakang'},
        
        {id:'imageCapture3',textAreaId:'textArea3',text:'Tampak Kiri'},
        
        {id:'imageCapture4',textAreaId:'textArea4',text:'Tampak Kanan'}
    ]


    return (
        <div className="col-sm-12 mb-5 content-adjuster">
           <HeaderFixContainer config={config} />
            {
                imageCaptureList.map(i => (
                    <ImageCapture imageCaptureImageID={i.id} imageCaptureTextAreaID={i.textAreaId} text={i.text} />
                ))
            }
            <div className="col-sm-12 text-center">
                <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={nextURL}>Simpan</Link>
            </div>
            <FooterBackground />
        </div>
    )
}