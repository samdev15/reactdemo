import React from 'react';
import Img from '../src/images/about-us.png';
import Common from './Common';

const About = () =>{
    return(
        <>
            <Common title="Grow your bussiness with" imgpath = {Img} btnText = "Contact US" btnLink="/contact"/>
        </>
    );
}

export default About;