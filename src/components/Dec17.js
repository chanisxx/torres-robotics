import React from 'react';
import ReactPlayer from 'react-player';

import page17 from '../images/page17.jpg'


const Dec17 = () => {
    return (
        <>
        <div id='Dec17'>
            <header className="date">December 17th</header>
            <p className="subheader">Navigation</p>
            <navigation id="sticky">12.17.20 <a href="#nav"><i class="fas fa-arrow-up"></i></a></navigation>
            <img src={page17} className="images"/>

            <div className="v-media">
                <ReactPlayer className="video" fluid={false} url="https://youtu.be/jzWy4gZdFXA"/>
                <div className="under-box"/>
            </div>
        </div>
        </>
    );
};

export default Dec17;