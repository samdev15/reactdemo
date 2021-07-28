import React from 'react';

const Card = (props) =>{
    return(
        <>
            <div className="col-4">
                <div className="card">
                    <img src={props.imgPath} className="card-img-top" alt={props.imgPath} height="300px"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;