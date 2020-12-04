import React from 'react';
import ack from '../images/ack.jpg'

import Confetti from 'react-confetti'


const Acknowledgement = () => {
    return (
        <>
        <div id='Acknowledgement'>
            

            <header className="date ack">Acknowledgement</header>
            <img src={ack} className="images"/>
            <Confetti/>
        </div>
        </>
    );
};

export default Acknowledgement;