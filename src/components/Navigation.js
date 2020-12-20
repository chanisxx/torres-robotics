import React from 'react';
import {Link} from 'react-router-dom';
import ct from '../images/ct.svg'
import {motion} from 'framer-motion';

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
function Navigation() {


    return (
        <motion.div 
        className="nav">
            <Link className='link'to='/'>
            <img src={ct} height='50px'/>
            </Link>
            <motion.span 
            // initial={{ y: -250}}
            // animate={{ y: 0 }}
            className='title'>Exploring Robotics</motion.span>
        </motion.div>
    )
}

export default Navigation;