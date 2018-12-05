import React from 'react';

export default (props) =>
{
    return(

          
                <section className="col-sm-12 ml-5">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src='/src/images/packagelist_oto_platinum.png'/>
                        </div>
                        <div className="col-sm-10">
                            <div className="col-sm-12">
                                <div className="row">
                                    <h5 className="text-body h-50 black-color"><strong id="ClaimNumber">{props.ClaimNumber}</strong></h5>
                                    <button type="button" className="btn btn-claim btn-yellow align-self-start ml-5"><h5 id="State">{props.State}</h5></button>
                                </div>
                            </div>
                            <div className="col-sm-12 mt-2">
                                <div className="row">
                                    <div className="col-sm-5 d-flex align-items-start">
                                        <img src='/src/images/list_address.png'/>
                                        <h5 id="IncidentLocation" className="text-muted transaction-list-text">{props.IncidentLocation}</h5>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="col-sm-12 d-flex align-items-center">
                                            <img src='/src/images/list_sumassured.png'/>
                                            <h5 id="PolicyNumber" className="text-muted transaction-list-text">{props.TotalLoss}</h5>
                                        </div>

                                        <div className="col-sm-12 d-flex align-items-center mt-2">
                                            <img src='/src/images/list_premi.png'/>
                                            <h5 id="IncidentTime" className="text-muted transaction-list-text">{props.IncidentTime}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           
    )
}