import React from 'react';
import ReactPlayer from 'react-player';

import page4 from '../images/page4.jpg'
import page5 from '../images/page5.jpg'


const Nov6 = () => {
    return (
        <>
        <div id='Nov6'>
            <header className="date">November 6th</header>
            <p className="subheader">Programming Movement</p>
            <navigation id="sticky">11.06.20 <a href="#nav"><i class="fas fa-arrow-up"></i></a></navigation>
            <img src={page4} className="images"/>
            <img src={page5} className="images"/>
            <div className="v-media">
                <ReactPlayer className="video" fluid={false} url="https://youtu.be/56GbekTsLRA"/>
                <div className="under-box"/>
            </div>
        </div>
        </>
    );
};

export default Nov6;