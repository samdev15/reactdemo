import React from 'react';
import Card from './Card';
import SData from './SData';

const Service = () =>{
    return(
        <>
            <div className=" container-fluid mt-5">
                <div className="row">
                    <div className="col-10 mx-auto mt-5">
                        <h1 className="text-center mb-5">Our Services</h1>
                        <div className="row gy-5 ">

                        {
                            SData.map((value, index)=>{
                                return (<Card key={index} title={value.title} imgPath={value.imgPath}/>);
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;