import React from 'react';

import page16 from '../images/page16.jpg'


const Dec16 = () => {
    return (
        <>
        <div id='Dec16'>
            <header className="date">December 16th</header>
            <p className="subheader">Obstacle Course</p>
            <img src={page16} className="images"/>
        </div>
        </>
    );
};

export default Dec16;