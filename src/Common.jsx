import React from 'react';
import { NavLink } from 'react-router-dom';
import Img from '../src/images/bg-title-01.jpg'

const Common = (props) =>{
    return(
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className=" col-10 mx-auto mt-5">
                        <div className="row d-flex align-items-center">
                            <div className="col-6 mt-5 d-flex flex-column">
                                <h1>{props.title} <br /><strong className="brand_name"> BeyondTechnologies</strong></h1>
                                <div className="my-3 desc">We are  the team of talented developer making websites</div>
                                <div className="mt-3">
                                    <NavLink to={props.btnLink} className="btn_link">{props.btnText}</NavLink>
                                </div>
                            </div>

                            <div className="col-6 header_img">
                                <img src={props.imgpath} alt={props.imgpath} width="600px" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Common;