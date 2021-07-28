import React from 'react';
import Img from '../src/images/bg-title-01.jpg';
import Common from './Common';

const Home = () =>{
    return(
        <>
            <Common title="Grow your bussiness with" imgpath = {Img} btnText = "Get Started" btnLink="/service"/>
        </>
    );
}

export default Home;