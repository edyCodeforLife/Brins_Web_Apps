import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PopUp from '../../components/common/popup';


export default (ChildComponent) => {
  
    class ComposedComponent extends Component {
        popupConfig = {};
        constructor(props){
            super(props);

            this.state = { showPopup:false };
            this.popupConfig.buttonOKText = [];
            this.popupConfig.popupID = new Date().getTime();
        }
        componentDidMount(){
            this.notAllowedAccessingPage();
        }
    
        componentDidUpdate(prevProps,prevState){
            this.notAllowedAccessingPage();

            // if(this.state.showPopup){
            //     console.log('asdsdasd');
            //     let currentData = this.handlePopupDataExist(this.popupConfig.senderComponent);
            //     this.popupConfig.imgSrc = currentData.imgSrc;
            //     this.popupConfig.bodyText = currentData.bodyText;
            //     this.popupConfig.visible = true;
               
            // }else{
            //     this.popupConfig.imgSrc = '';
            //     this.popupConfig.visible = false;
               
       
            // }
           
        }
        
        notAllowedAccessingPage = () =>{
        
            if(_.isEmpty(this.props.login) && this.props.location.pathname !== '/'){
                this.props.history.push('/');
            }

           

        }

        handlePopupDataExist = (senderComponent) => {
           
            switch (senderComponent) {
                case 'login':
                   return {
                       imgSrc : this.props.login.MessageContent === 'Data Customer Tidak Ada' ? '/src/images/fail.png' : '/src/images/success.png',
                       bodyText : this.props.login.MessageContent
                   }
                default:
                    break;
            }
        }

        handlePopupRedirect = (senderComponent) => {
       
            switch (senderComponent) {
                case 'login':
                    if(this.popupConfig.redirectTo){
                        this.props.history.push('/' + this.popupConfig.redirectTo);
                    }
                    break;
                default:
                    break;
            }
        }
        getPopupData = (config) =>{
          
            this.popupConfig = {
                headerText : config.headerText,
                bodyText : config.bodyText,
                imgSrc : this.handlePopupDataExist(config.senderComponent).imgSrc,
                senderComponent:config.senderComponent,
                buttonOKText : config.buttonOKText,
                redirectTo : config.redirectTo,
                visible:true
            }
            
         
            this.setState({
                showPopup:true
            })
            
           
        }

        hidePopup = () => {
            this.setState({
                showPopup:false
            })
            this.handlePopupRedirect(this.popupConfig.senderComponent)
        }

        render(){
            
            
           
            return (
                    <div className="h-100">
                        <PopUp config={this.popupConfig} data={this.props} hidePopup={this.hidePopup}/>
                        
                        <ChildComponent {...this.props} getPopupData={this.getPopupData}/>
                    </div>
                );
        }
    }
    function mapStateToProps(state){
        return {login:state.login};
    }
    
    return connect(mapStateToProps)(ComposedComponent);
}

