import React from 'react';

export default (props) => {
    return (
        <div class="col-sm-7">
            {
                props.data.map(d => (
                    <div className="row col-sm-12 logo-left-description" key={d.benefitName}>
                        <div className="col-sm-2 d-flex align-items-center justify-content-end">
                            <img src={d.imgSrc} className="image-medium" />
                        </div>
                        <div className="col-sm-10 text-left d-flex align-items-center">
                            <h5>{d.benefitName}</h5>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}