import React from 'react';
import ReactPlayer from 'react-player';

import page6 from '../images/page6.jpg'
import page65 from '../images/page6.5.jpg'
import page7 from '../images/page7.jpg'


const Nov13 = () => {
    return (
        <>
        <div id='Nov13'>


            <header className="date">November 13th</header>
            <p className="subheader">Arm and Claw</p>
            
            <img src={page6} className="images"/>
            <img src={page65} className="images"/>

            <div className="v-media">
                <ReactPlayer className="video" fluid={false} url="https://youtu.be/P0-FNRiyrnY"/>
                <div className="under-box"/>
            </div>

            <img src={page7} className="images"/>
            

        </div>
        </>
    );
};

export default Nov13;