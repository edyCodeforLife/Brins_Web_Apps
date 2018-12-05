export const BRINS_DEV_URL_BASE = 'https://brinsmobdev.brins.co.id/';
export const BRINS_PRODUCTION_URL_BASE = 'https://brinsmob.brins.co.id/';
export const BRINS_URL_BASE = BRINS_DEV_URL_BASE;

//fake api

export const FAKE_LOGIN = BRINS_URL_BASE + 'TrainingService/checkLogin';

//encrypt decrypt service 
export const ENCRYPT_SERVICE = BRINS_URL_BASE + 'encryptservice/encryptdata';
export const DECRYPT_SERVICE = BRINS_URL_BASE + 'encryptservice/decryptdata';

//Discount

export const API_DISCOUNT = BRINS_URL_BASE + "premiservice/selectdiscount";

//Look up

export const GET_PROVINCEANDCITY_BY_POSTAL_CODE = BRINS_URL_BASE + 'TableDataSelectService/selectProvinceAndCityByPostalCode';
export const GET_POSTAL_CODE = BRINS_URL_BASE + 'TableDataSelectService/selectPostalCode';
export const GET_FLOOD_ZONE = BRINS_URL_BASE + 'TableDataSelectService/selectFloodZone';
export const GET_ZONE_CATEGORY = BRINS_URL_BASE + 'TableDataSelectService/selectZoneCategory';
export const GET_RISK_CATEGORY = BRINS_URL_BASE + 'TableDataSelectService/selectRiskCategory';
export const GET_RISK_OCCUPATION = BRINS_URL_BASE + 'TableDataSelectService/selectRiskOccupation';
export const GET_COLOR = BRINS_URL_BASE + 'TableDataSelectService/selectColor';
export const GET_VEHICLE_TYPE = BRINS_URL_BASE + 'TableDataSelectService/selectVehicleType';
export const GET_VEHICLE_MODEL = BRINS_URL_BASE + 'TableDataSelectService/selectVehicleModel';
export const GET_VEHICLE_BRAND = BRINS_URL_BASE + 'TableDataSelectService/selectVehicleBrand';
export const GET_LICENSE_PLATE = BRINS_URL_BASE + 'TableDataSelectService/selectLicensePlate';
export const GET_REGIONS = BRINS_URL_BASE + 'TableDataSelectService/selectRegion';
export const GET_BRANCHS = BRINS_URL_BASE + 'TableDataSelectService/selectBranch';
export const GET_OCCUPATIONS = BRINS_URL_BASE + 'TableDataSelectService/selectOccupation';
export const GET_CITIES = BRINS_URL_BASE + 'TableDataSelectService/selectCity';
export const GET_PROVINCES = BRINS_URL_BASE + 'TableDataSelectService/selectProvince';
export const GET_VEHICLE_SUBMODEL = BRINS_URL_BASE + 'TableDataSelectService/selectVehicleSubModel';
export const GET_PRODUCTANDCOVERAGE_BY_COVERAGECODE = BRINS_URL_BASE + 'TableDataSelectService/selectProductAndCoverageByCoverageCode';

// Product

export const GET_PRODUCT_ASRI = BRINS_URL_BASE + 'ProductAsriService/selectProductAsri';
export const GET_PRODUCT_ASRI_BY_REF_NUMBER = BRINS_URL_BASE + 'ProductAsriService/selectProductAsriByReferenceNumberForView';
export const CALCULATE_PREMI_ASRI = BRINS_URL_BASE + 'PremiService/calculateProductAsriPremi';
export const POST_ASRI = BRINS_URL_BASE + 'ProductAsriService/insertProductAsri';
export const POST_ASRI_PHOTOS = BRINS_URL_BASE + 'ProductAsriService/uploadProductAsri';
export const POST_ASRI_INVOICE = BRINS_URL_BASE + 'PaymentService/createInvoiceForProductAsri';

/* OTO */

export const GET_PRODUCT_OTO = BRINS_URL_BASE + "ProductOtoService/selectProductOto";
export const GET_PRODUCT_OTO_BY_REF_NUMBER = BRINS_URL_BASE + "ProductOtoService/selectProductOtoByReferenceNumberForView";
export const CALCULATE_PREMI_OTO = BRINS_URL_BASE + "PremiService/calculateProductOtoPremi";
export const POST_OTO = BRINS_URL_BASE + "ProductOtoService/insertProductOto";
export const POST_OTO_PHOTOS = BRINS_URL_BASE + "ProductOtoService/uploadProductOto";
export const POST_OTO_INVOICE = BRINS_URL_BASE + "PaymentService/createInvoiceForProductOto";

 /* PERSONAL ACCIDENT */

export const GET_PRODUCT_PA = BRINS_URL_BASE + "ProductPersonalAccidentService/selectProductPersonalAccident";
export const GET_PRODUCT_PA_BY_REF_NUMBER = BRINS_URL_BASE + "ProductPersonalAccidentService/selectProductPersonalAccidentByReferenceNumberForView";
export const CALCULATE_PREMI_PA = BRINS_URL_BASE + "PremiService/calculateProductPersonalAccidentPremi";
export const POST_PA = BRINS_URL_BASE + "ProductPersonalAccidentService/insertProductPersonalAccident";
export const POST_PA_PHOTOS = BRINS_URL_BASE + "ProductPersonalAccidentService/uploadProductPersonalAccident";

/* GENERAL */

export const GET_PRODUCT_GENERAL = BRINS_URL_BASE + "ProductGeneralService/selectProductGeneral";
export const GET_PRODUCT_GENERAL_BY_REF_NUMBER = BRINS_URL_BASE + "ProductGeneralService/selectProductGeneralByReferenceNumber";
export const POST_GENERAL_INVOICE = BRINS_URL_BASE + "ProductGeneralService/createInvoiceForProductGeneral";


 // CUSTOMER

 export const POST_CUSTOMER_FORGOT_PASSWORD = BRINS_URL_BASE + "CustomerService/forgotPassword";
 export const POST_CUSTOMER_CHANGE_PASSWORD = BRINS_URL_BASE + "CustomerService/changePassword";
 export const GET_CUSTOMER_CHECK_LOGIN = BRINS_URL_BASE + "CustomerService/checkLogin";
 export const POST_CUSTOMER_UPDATE = BRINS_URL_BASE + "CustomerService/updateCustomer";
 export const POST_CUSTOMER_REGISTER = BRINS_URL_BASE + "CustomerService/registerCustomer";
 export const GET_CUSTOMER_EXIST_MIDDLEWARE = BRINS_URL_BASE + "CustomerService/checkExistInMiddleware";
 export const POST_CUSTOMER_REGISTER_EMAIL = BRINS_URL_BASE + "CustomerService/registerEmail";
 export const POST_CUSTOMER_VERIFY_EMAIL = BRINS_URL_BASE + "CustomerService/verifyEmail";
 export const POST_CUSTOMER_REGISTER_MOBILEPHONE = BRINS_URL_BASE + "CustomerService/registerMobilePhone";
 export const POST_CUSTOMER_VERIFY_MOBILEPHONE = BRINS_URL_BASE + "CustomerService/verifyMobilePhone";
 export const GET_CUSTOMER_EXIST_SERVER = BRINS_URL_BASE + "CustomerService/checkExistInServer";
 export const GET_CUSTOMER_VERIFY_EMAIL_EDITPROFILE = BRINS_URL_BASE + "CustomerService/verifyEmailForEditProfile";
 export const GET_CUSTOMER_REGISTER_EMAIL_EDIT_PROFILE = BRINS_URL_BASE + "CustomerService/registerEmailForEditProfile";
 export const GET_CUSTOMER_VERIFY_MOBILE_PHONE_EDIT_PROFILE = BRINS_URL_BASE + "CustomerService/verifyMobilePhoneForEditProfile";
 export const GET_CUSTOMER_REGISTER_MOBILE_PHONE_EDIT_PROFILE = BRINS_URL_BASE + "CustomerService/registerMobilePhoneForEditProfile";


// AGENT
export const GET_AGENT_CHECK_LOGIN = BRINS_URL_BASE + "AgentService/checkLogin";
export const POST_AGENT_CHANGE_PASSWORD = BRINS_URL_BASE + "AgentService/changePassword";
export const POST_AGENT_FORGOT_PASSWORD = BRINS_URL_BASE + "AgentService/forgotPassword";


// CLAIM

export const GET_CLAIM = BRINS_URL_BASE + "ClaimService/selectClaim";
export const POST_CLAIM = BRINS_URL_BASE + "ClaimService/insertClaim";
export const GET_CLAIM_BY_CLAIM_NUMBER = BRINS_URL_BASE + "ClaimService/selectClaimByClaimNumber";

