import React from 'react';

import intro from '../images/intro.jpg'


const Introduction = () => {
    return (
        <>
        <div id='intro'>

            <header className="date">Introduction</header>
            <p className="subheader">Chanis' Robotics Journal</p>
            <img src={intro} className="images"/>
        </div>
        </>
    );
};

export default Introduction;