import React from 'react';
import ReactPlayer from 'react-player';

import page14 from '../images/page14.jpg'
import page15 from '../images/page15.jpg'


const Dec15 = () => {
    return (
        <>
        <div id='Dec15'>
            <header className="date">December 15th</header>
            <p className="subheader">Building the Car</p>
            <img src={page14} className="images"/>
            <img src={page15} className="images"/>
            <div className="v-media">
                <ReactPlayer className="video" fluid={false} url="https://youtu.be/z1sSgFWRrgE"/>
                <div className="under-box"/>
            </div>
        </div>
        </>
    );
};

export default Dec15;