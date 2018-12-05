import React from 'react';
import { Link } from 'react-router-dom';
import SideMenuList from './sidemenu-list';


export default (props) =>{

    function onMobileMenuClick() {
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

    function onSideMenuClose(){
        let sideMenu = document.querySelector('.side-menu');
        let bgFullMasking = document.querySelector('.bg-full-masking');
        sideMenu.classList.remove('show');
        bgFullMasking.classList.remove('show');
    }

    function closeSideMenu(e){
        let btnCloseSideMenu = document.querySelector('.btn-close-sidemenu');
        btnCloseSideMenu.click();
    }

    console.log(props);

    return (
        <div className="col-sm-12">
            <div className="bg-full-masking collapse"/>
            <div className="col-sm-8 side-menu blue-box collapse">
                <div className="col-sm-12 header-container-sidemenu ">
                    <span className="header-text-sidemenu">Menu</span>
                    <button className="btn-close-sidemenu close" onClick={onSideMenuClose}><span aria-hidden="true">&times;</span></button>
                </div>
                <div className="col-sm-12 mt-5 header-login-sidemenu">
                    <Link to="/" className="col-sm-12" onClick={closeSideMenu}>
                        <div className="row">
                            <div className="col-sm-1">
                                <img src="/src/images/user_login.png" width="50" height="50"/>
                            </div>
                            <div className="col-sm-11">
                                    <span>Hi Tamu</span>
                                    <span>Login</span>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-12 mt-5 body-sidemenu">
                    <SideMenuList btncloseelement="btn-close-sidemenu"/>
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
            
            <button onClick={onMobileMenuClick} className="navbar-toggler btn-mobile-menu custom-toggler" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
        
        </div>
    )
}