import React from 'react';

import page12 from '../images/page12.jpg'
import page13 from '../images/page13.jpg'


const Dec14 = () => {
    return (
        <>
        <div id='Dec14'>
            <header className="date">December 14th</header>
            <p className="subheader">Designing the Car</p>
            <img src={page12} className="images"/>
            <img src={page13} className="images"/>
        </div>
        </>
    );
};

export default Dec14;