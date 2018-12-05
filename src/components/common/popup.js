import React from 'react';
import _ from 'lodash';
import FooterBackGround from './footer-background';


export default (props) =>  {
   
    function onPopupClick(e) {
        
        document.querySelector('.popup-container').classList.add('d-none')
      
        if( document.querySelector('#' + props.config.popupID)){
           
            document.querySelector('#' + props.config.popupID).classList.add('d-none');
        }
       
       
        if(props.hidePopup){
           
            props.hidePopup(e);
        }
       
    }
   
    let classVisibleContainer = '';
  
    if(!props.config.visible || props.config.visible === undefined){
        console.log(props.config.visible);
        classVisibleContainer = 'd-none';
    }else{
        classVisibleContainer = 'h-100';
        let currentPopupContainerElement = document.querySelector('#' + props.config.popupID);
        console.log(currentPopupContainerElement);
        if(currentPopupContainerElement){
            currentPopupContainerElement.classList.remove('d-none');
        }
    }
    
        return (
            <div className={"popup-container "  + classVisibleContainer} id={props.config.popupID}>
                <div className={"col-sm-10 popup"}>
                    <div className="col-sm-12 header blue-box text-center">
                        <h2>{props.config.headerText}</h2>
                    </div>
                    <div className="col-sm-12 body">
                        <div className="row align-items-center mt-3">
                            <img src={props.config.imgSrc} />
                            <h4 className="ml-3">{props.config.bodyText}</h4>
                        </div>
                    </div>
                    <div className="col-sm-12 footer text-center mt-5">
                    
                    {
                        props.config.buttonOKText.map((b) => (
                            <button key={b} type="button" className="btn btn-login btn-yellow" onClick={onPopupClick}>{b}</button>
                        ))
                    }
                    </div>
                    <FooterBackGround />
                </div>
            </div>
        )
  
}