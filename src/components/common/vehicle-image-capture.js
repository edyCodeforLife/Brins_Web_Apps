import React from 'react';
import ImageCapture from './image-capture';
import HeaderFixContainer from '../common/header-fix-container';
import FooterBackground from '../common/footer-background';
import { Link } from 'react-router-dom';
export default (props)=>{
    let nextURL = props.match.url.replace('vehicle-image-capture','survey');

    let config = {
        headerLogoText:'BRINS ASRI',
        blueBoxSmallNav:'Form',
        grayBoxText:'Informasi Bangunan',
        triangleDown:''
    }


    return (
        <div className="col-sm-12 mb-5 content-adjuster">
           <HeaderFixContainer config={config} />
            <ImageCapture text="KTP" />
            <ImageCapture text="STNK" />
            <ImageCapture text="Depan" />
            <ImageCapture text="Belakang" />
            <ImageCapture text="Kiri" />
            <ImageCapture text="Kanan" />
            <ImageCapture text="Interior" />
            <div className="col-sm-12 text-center">
                <Link className="btn btn-login btn-yellow d-inline-flex align-items-center justify-content-center" to={nextURL}>Simpan</Link>
            </div>
            <FooterBackground />
        </div>
    )
}