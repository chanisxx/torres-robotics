import React, { useEffect } from 'react';
import {motion} from 'framer-motion';

import Navigation from './Navigation';
import TableOfContents from './TableofContents';

import Oct30 from './Oct30'
import Nov6 from './Nov6'
import Nov13 from './Nov13'
import Nov20 from './Nov20'
import Intro2 from './Introduction2'
import Dec14 from './Dec14'
import Dec15 from './Dec15'
import Dec16 from './Dec16'
import Dec17 from './Dec17'
import Acknowledgement from './Acknowledgements'



function HomePage() {
    useEffect(() => window.scrollTo(0, 0))

    return (
        <motion.div id='HomePage'
        
        >
            <div>
                <Navigation />
                {/* <hr></hr> */}
                <div className='container'>
                        <motion.div
                        initial= {{x: -500, opacity : 0}}
                        animate= {{ x: 0, opacity : 1}}
                        transition={{duration: 2, type: 'spring'}}
                        // initial={{ opacity : 0 }}
                        // animate={{ opacity : 1}}
                        >
                            <TableOfContents />
                        </motion.div>
                        
                       
                    <motion.div 
                    initial= {{x: 500, opacity : 0}}
                    animate= {{ x: 0, opacity : 1}}
                    transition={{duration: 2, type: 'spring'}}
                    // initial={{ opacity : 0 }}
                    // animate={{ opacity : 1}}
                    className='entries'>
                        <Oct30 />
                        <Nov6 />
                        <Nov13 />
                        <Nov20 />
                        <Intro2 />
                        <Dec14 />
                        <Dec15 />
                        <Dec16 />
                        <Dec17 />
                        <Acknowledgement />
                    </motion.div>

                </div>
                
            </div>
            
        </motion.div>
    )

}

export default HomePage;