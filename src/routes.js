import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Login from './container/login-container';
import ForgotPassword from './container/forgot-password-container';
import ForgotPasswordAgent from './container/forgot-password-agent-container';
import FAQ from './components/FAQ/faq'
import Product from './components/product/product';
import BuildingInformation from './container/building-information-container';
import PromoCode from './container/promo-code-container';
import PremiIlustration from './container/premi-ilustration-container';
import SPPAASRI from './container/sppa-asri-container';
import SPPAOTO from './container/sppa-oto-container';
import BuildingImageCapture from './container/building-image-capture-container';
import Statement from './components/common/statement';
import ProductSuccess from './components/product/product-success';
import VehicleInformation from './container/vehicle-information-container';
import VehicleImageCapture from './components/common/vehicle-image-capture';
import Survey from './components/common/survey';
import AboutUS from './components/about-us/about-us';
import ProductList from './components/product/product-list';
import ChangePassword from './container/change-password-container';
import ChangePasswordResult from './container/change-password-result-container';
import ChangePasswordAgent from './container/change-password-agent-container';
import ChangeMobilePhone from './container/change-mobile-phone-container';
import ChangeEmail from './container/change-email-container';
import ClaimSubmission from './container/claim-submission-container';
import ClaimSubmissionResult from './container/claim-submission-result-container';
import ClaimList from './container/claim-list-container';
import ClaimListDetail from './container/claim-list-detail-container';
import RegisterStep1 from './container/registration/register-step1-container';
import RegisterStep2 from './container/registration/register-step2-container';
import RegisterStep3 from './container/registration/register-step3-container';
import RegisterStep4 from './container/registration/register-step4-container';
import RegisterFinished from './components/register/register-stepfinished';
import ChangeMobilePhoneToken from './container/change-mobile-phone-token-container';
import ChangeMobilePhoneResult from './container/change-mobile-phone-result-container';
import ChangeEmailToken from './container/change-email-token-container';
import ChangeEmailResult from './container/change-email-result-container';
import Profile from './container/profile-container';
import TransactionList from './container/transaction-list-container';

const Main = () => {
        return(
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/forgotpasswordagent" component={ForgotPasswordAgent} />
                <Route path="/faq" component={FAQ} />
                <Route path="/about-us" component={AboutUS} />
                <Route exact path="/product" component={Product} />
                <Route path="/product/:productPackageName/:productName/form/start-page" render={props => {
                     let currentProductParams = props.match.params;
                     if(currentProductParams.productPackageName.toLowerCase() === 'asri'){
                         return (<BuildingInformation originalProps={props}/>);
                     }
                     if(currentProductParams.productPackageName.toLowerCase() === 'oto'){
                        return <VehicleInformation originalProps={props} />
                     }
                }} />
                <Route path="/product/:productPackageName/:productName/form/promo-code" component={PromoCode} />
                <Route path="/product/:productPackageName/:productName/form/premi-ilustration" component={PremiIlustration} />
                <Route path="/product/:productPackageName/:productName/form/sppa" render={props => {
                     let currentProductParams = props.match.params;
                     if(currentProductParams.productPackageName.toLowerCase() === 'asri'){
                         return (<SPPAASRI originalProps={props}/>);
                     }
                     if(currentProductParams.productPackageName.toLowerCase() === 'oto'){
                        return <SPPAOTO originalProps={props} />
                     }
                }} />
                <Route path="/product/:productPackageName/:productName/form/building-image-capture" component={BuildingImageCapture} />
                <Route path="/product/:productPackageName/:productName/form/statement" component={Statement} />
                <Route path="/product/:productPackageName/:productName/form/product-success" component={ProductSuccess} />
                <Route path="/product/:productPackageName/:productName/form/vehicle-image-capture" component={VehicleImageCapture} />
                <Route path="/product/:productPackageName/:productName/form/survey" component={Survey} />
                <Route path="/product-list/:productId" component={ProductList} />
                <Route path="/change-password" component={ChangePassword} />
                <Route path="/change-password-result" component={ChangePasswordResult} />
                <Route path="/change-password-agent" component={ChangePasswordAgent} />
                <Route path="/change-mobile-phone" component={ChangeMobilePhone} />
                <Route path="/change-email" component={ChangeEmail} />
                <Route path="/claim-submission" component={ClaimSubmission} />
                <Route path="/claim-submission-result" component={ClaimSubmissionResult}/>
                <Route path="/claim-list" component={ClaimList} />
                <Route path="/claim-list-detail/:claimnumber" component={ClaimListDetail} />
                <Route path="/register/step1" component={RegisterStep1} />
                <Route path="/register/step2" component={RegisterStep2} />
                <Route path="/register/step3" component={RegisterStep3} />
                <Route path="/register/step4" component={RegisterStep4} />
                <Route path="/register/finished" component={RegisterFinished} />
                <Route path="/change-mobile-phone-token" component={ChangeMobilePhoneToken} />
                <Route path="/change-mobile-phone-result" component={ChangeMobilePhoneResult} />
                <Route path="/change-email-token" component={ChangeEmailToken} />
                <Route path="/change-email-result" component={ChangeEmailResult} />
                <Route path="/profile" component={Profile} />
                <Route path="/transaction-list" component={TransactionList} />
            </Switch>
        )
}

export default Main;
