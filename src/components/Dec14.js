import React from 'react';

import page12 from '../images/page12.jpg'
import page13 from '../images/page13.jpg'


const Dec14 = () => {
    return (
        <>
        <div id='Dec14'>
            <header className="date">December 14th</header>
            <p className="subheader">Designing</p>
            <navigation id="sticky">12.14.20 <a href="#nav"><i class="fas fa-arrow-up"></i></a></navigation>
            <img src={page12} className="images"/>
            <img src={page13} className="images"/>
        </div>
        </>
    );
};

export default Dec14;