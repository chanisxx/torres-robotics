import React from 'react';
import {motion} from 'framer-motion';
import intro from '../images/intro.jpg'


const Introduction = () => {
    return (
        <>
        <motion.div 
        initial = {{y:400, opacity:0}}
        animate = {{y:0, opacity:1}}
        transition = {{
            delay: 1
        }}
        id='intro'>
            
            <header className="intro">Welcome to my journal!</header>
            <img src={intro} className="images1"/>
        </motion.div>
        </>
    );
};

export default Introduction;