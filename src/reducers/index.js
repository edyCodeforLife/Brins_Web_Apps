import { combineReducers } from 'redux';
import authReducer from './auth';
import mobilePhoneReducer from './mobilephone';
import emailReducer from './email';
import customerReducer from './customer';
import registerReducer from './register';
import lookupReducer from './lookup';
import changePasswordReducer from './password';
import forgotPasswordReducer from './forgotpassword';
import profileReducer from './profile';
import claimSubmissionReducer from './claimsubmission';
import claimListReducer from './claimlist';
import claimDetailReducer from './claimdetail';
import branchReducer from './branch';
import productReducer from './product';
import premiASRIReducer from './premi-asri';
import discountReducer from './discount';
import forgotPasswordAgentReducer from './forgotpasswordagent';
import agentChangePasswordReducer from './changepasswordagent';
import transactionReducer from './transaction';

export default combineReducers({
    login:authReducer,
    mobilephone:mobilePhoneReducer,
    email:emailReducer,
    customer:customerReducer,
    register:registerReducer,
    lookup:lookupReducer,
    password:changePasswordReducer,
    forgotpassword:forgotPasswordReducer,
    profile:profileReducer,
    claim:claimSubmissionReducer,
    branch:branchReducer,
    claimlist:claimListReducer,
    claimdetail:claimDetailReducer,
    product:productReducer,
    premiASRI:premiASRIReducer,
    discount:discountReducer,
    forgotpasswordagent:forgotPasswordAgentReducer,
    agentchangepassword:agentChangePasswordReducer,
    transactions:transactionReducer
})