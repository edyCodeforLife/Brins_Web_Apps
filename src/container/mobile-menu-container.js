import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogout } from '../action/auth';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import menuService from '../services/menu';
import SideMenuList from '../components/common/sidemenu-list';
import PopUp from '../components/common/popup';


export class MobileMenu extends React.Component {

    popupConfig = {};
    constructor(props){
        super(props);
        this.state = {
            menuList:menuService.getSideMenuList(0),
            loginName:'Hi Tamu',
            loginStatus:'login',
            loginURL:'/',
            logoutTrigger:false
        }
        this.popupConfig = {
            popupID : 'id' + new Date().getTime(),
            headerText:'Log out',
            bodyText:'Apakah anda yakin akan log out dari sesi anda ?',
            senderComponent:'mobile-menu',
            imgSrc:'/src/images/fail.png',
            buttonOKText:['Ya','Tidak'],
            redirectTo:'/',
            visible:false
        }
    }

   renderSideMenu = (menu) => {

    return(
        <SideMenuList key={menu.path} menuList={menu} />
    )
   }
   componentDidMount(){
       
   
   }
   componentDidUpdate(prevProps,prevState){
     
       let currentMenuListID = _.isEmpty(this.props.login.Data) === false ? 1 : 0; 

       if( _.isEmpty(this.props.login.Data) === false){
           if(this.props.login.Data.CustomerID){
               currentMenuListID = 1;
           }else{
                currentMenuListID = 2;
           }

       }else{
        currentMenuListID = 0;
       }

       let currentMenuList = menuService.getSideMenuList(currentMenuListID);
         
        
        if(prevState.menuList.length !== currentMenuList.length){
           
            if(_.isEmpty(this.props.login.Data) === false){
               
                this.setState({
                    menuList : currentMenuList
                })
            }else{
                this.setState({
                    menuList : currentMenuList
                })
            }
        }

        if(prevState.loginName === 'Hi Tamu' && this.props.login.Data){
           
            this.setState({
                loginName:this.props.login.Data.Name,
                loginStatus:'logout',
                loginURL:'#'
            })
        }
   }

   onMobileMenuClick = () => {
       let sideMenu = document.querySelector('.side-menu');
       let bgFullMasking = document.querySelector('.bg-full-masking');
       if(sideMenu.length > 0){
           sideMenu.classList.remove('show');
           bgFullMasking.classList.remove('show')
       }else{
            sideMenu.classList.add('show');
            bgFullMasking.classList.add('show')
       }
    }

    onSideMenuClose = () => {
        let sideMenu = document.querySelector('.side-menu');
        let bgFullMasking = document.querySelector('.bg-full-masking');
        sideMenu.classList.remove('show');
        bgFullMasking.classList.remove('show');
    }

    closeSideMenu = (e) => {
        if(this.state.loginStatus === 'logout'){
            e.preventDefault();
            this.popupConfig.visible = true;
            this.setState({
                logoutTrigger:true
            })
        }
        else{
            let btnCloseSideMenu = document.querySelector('.btn-close-sidemenu');
            btnCloseSideMenu.click();
        }
    }

    hidePopup = (e) => {
        // this.setState({
        //     logoutTrigger:false,  
        // })
      
        if(e.target.innerText.toLowerCase() === 'ya'){
            
            this.popupConfig.visible = false;
            let btnCloseSideMenu = document.querySelector('.btn-close-sidemenu');
            btnCloseSideMenu.click();
            this.props.doLogout();
            this.setState({
                logoutTrigger:false,
                loginName:'Hi Tamu',
                loginStatus:'login'
            })
            
        }
    }

    render(){
        let showPopupElement = '';

       
        return (
            
            <div className="col-sm-12">
                <PopUp config={this.popupConfig}  hidePopup={this.hidePopup}/>
                <div className="bg-full-masking collapse"/>
                <div className="col-sm-8 side-menu blue-box collapse">
                    <div className="col-sm-12 header-container-sidemenu ">
                        <span className="header-text-sidemenu">Menu</span>
                        <button className="btn-close-sidemenu close" onClick={this.onSideMenuClose}><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="col-sm-12 mt-5 header-login-sidemenu">
                        <Link to= "/" className="col-sm-12" onClick={this.closeSideMenu}>
                            <div className="row">
                                <div className="col-sm-1">
                                    <img src="/src/images/user_login.png" width="50" height="50"/>
                                </div>
                                <div className="col-sm-11">
                                        <span>{this.state.loginName}</span>
                                        <span>{this.state.loginStatus}</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-12 mt-5 body-sidemenu">
                        <nav>
                            {
                                this.state.menuList.map(this.renderSideMenu)
                            }
                        </nav>
                        
                    </div>
                    <div className="row footer-sidemenu align-items-center">
                      
                        <div className="col-sm-12">
                            <img src="/src/images/mainprimary_payment.png" className="footer-logo-img"/>
                            <div>
                                <span>Email : brinsmobile@brins.co.id</span>
                                <span>Call center : +62 (21) 1500 699</span>
                                <span>Website : www.brins.co.id</span>
                            </div>
                        </div>
                    </div>
                  
                </div>
                
                <button onClick={this.onMobileMenuClick} className="navbar-toggler btn-mobile-menu custom-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
            </div>
        )
    }

 
}

function mapStateToProps({login}){
    return {login};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({doLogout},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(MobileMenu);