import React from 'react';
import ReactPlayer from 'react-player';

import page1 from '../images/page1.jpg'
import page3 from '../images/arm-claw.jpg'
import page2 from '../images/page2.jpg'

const Oct30 = () => {

  
    return (
        <>
        <div id='Oct30'>

            <header className="date">October 30th</header>
            <p className="subheader">Building the Robotic Arm Tank</p>

            <img src={page1} className="images"/>

            <div className="v-media">
                <ReactPlayer className="video" fluid={false} url="https://youtu.be/vdBPXA6RRY8"/>
                <div className="under-box"/>
            </div>

            <img src={page3} className="images"/>
            <img src={page2} className="images"/>
            
        </div>
        </>
    );
};

export default Oct30;