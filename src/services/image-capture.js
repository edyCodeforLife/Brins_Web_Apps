import * as DocumentCaptureConstant from '../constants/document-capture';
const buildingImageCapture = [
    {className:'imageCapture1',text:'Tampak Depan'},
            
    {className:'imageCapture2',text:'Tampak Belakang'},
    
    {className:'imageCapture3',text:'Tampak Kiri'},
    
    {className:'imageCapture4',text:'Tampak Kanan'}
]

const vehicleImageCapture = [
    {className:'imageCapture1',text:'KTP'},

    {className:'imageCapture2',text:'STNK'},

    {className:'imageCapture3',text:'Depan'},
            
    {className:'imageCapture4',text:'Belakang'},
    
    {className:'imageCapture5',text:'Kiri'},
    
    {className:'imageCapture6',text:'Kanan'},
    
    {className:'imageCapture7',text:'Interior'}
]

const imageCaptureASRIConstant = [
    {'Tampak Depan':DocumentCaptureConstant.PHOTO_BUILDING_FRONT},
    {'Tampak Belakang':DocumentCaptureConstant.PHOTO_BUILDING_BACK},
    {'Tampak Kiri':DocumentCaptureConstant.PHOTO_BUILDING_LEFT},
    {'Tampak Kanan':DocumentCaptureConstant.PHOTO_BUILDING_RIGHT}
]

const imageCaptureOTOConstant = [
    {'KTP':DocumentCaptureConstant.PHOTO_ASSURED_IDENTITYCARD},
    {'STNK':DocumentCaptureConstant.PHOTO_ASSURED_STNK},
    {'Depan':DocumentCaptureConstant.PHOTO_VEHICLE_FRONT},
    {'Belakang':DocumentCaptureConstant.PHOTO_VEHICLE_BACK},
    {'Kiri':DocumentCaptureConstant.PHOTO_VEHICLE_LEFT},
    {'Kanan':DocumentCaptureConstant.PHOTO_VEHICLE_RIGHT},
    {'Interior':DocumentCaptureConstant.PHOTO_VEHICLE_INTERIOR},
]


let getImageCaptureByID = (id) => {
    switch (id) {
        case 1:
            return buildingImageCapture;
        case 2:
            return vehicleImageCapture;
        default:
            break;
    }
}

let getImageCaptureConstantByID = (id) => {
    switch (id) {
        case 1:
            return imageCaptureASRIConstant;
        case 2:
            return imageCaptureOTOConstant;
        default:
            break;
    }
}

let ImageCaptureService = {
    getImageCaptureByID,
    getImageCaptureConstantByID
}

export default ImageCaptureService;