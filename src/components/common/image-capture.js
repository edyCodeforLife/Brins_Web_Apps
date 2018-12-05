import React from 'react';

export default (props)=> {
  
    function onImageCaptureChange(event){
        let imageTargetElement = event.target.previousSibling;
        let file = event.target.files[0];
        let reader = new FileReader();


        reader.onloadend = function(event){
            imageTargetElement.src = event.target.result
        }

        reader.readAsDataURL(file);
    }

    return(
        <div className="col-sm-12 py-5">
            <h2 className={props.className + " color-black"}>{props.text}</h2>
            <div className="col-sm-12 text-center mt-3">
              
                <img src="/src/images/camera_default.png" accept="image/*" className={props.className} width="600" height="400" capture="filesystem"/>
                <input type="file" className={props.className + " input-image-capture"} onChange={onImageCaptureChange}/>
               
            </div>
            <div className="col-sm-12 mt-5 d-flex justify-content-center">
                <textarea rows="5" placeholder="Silahkan isi catatan" className={props.className + " form-control w-80"} />
            </div>
        </div>
    )
}