import React from 'react';
import ReactPlayer from 'react-player';

import page9 from '../images/page9.jpg'
import page10 from '../images/page10.jpg'
import page11 from '../images/page11.jpg'
import page115 from '../images/page11.5.jpg'


const Nov20 = () => {
    return (
        <>
        <div id='Nov20'>

            <header className="date">November 20th</header>
            <p className="subheader">Programming the Line-Following and Ultrasonic Sensor</p>
            <navigation id="sticky">11.20.20 <a href="#nav"><i class="fas fa-arrow-up"></i></a></navigation>
            <img src={page9} className="images"/>
            <img src={page10} className="images"/>
            <div className="v-media">
                <ReactPlayer className="video" fluid={false} url="https://youtu.be/jK0jvOg7zoM"/>
                <div className="under-box"/>
            </div>
            <img src={page11} className="images"/>
            <img src={page115} className="images"/>
            <div className="v-media">
                <ReactPlayer className="video" fluid={false} url="https://youtu.be/wT4KGziURYY"/>
                <div className="under-box"/>
            </div>
        </div>
        </>
    );
};

export default Nov20;