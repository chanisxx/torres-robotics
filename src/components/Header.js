import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import Introduction from './Introduction';
import tank from '../images/arm-tank.png';

function Header() {
    return(
    <div>
            <div>
                <motion.img 
                initial= {{x: -1000}}
                animate= {{ x: 0}}
                transition={{ duration: 1, delay: .2, type: 'spring', stiffness: 40}}
                src = {tank} className="tank"/>

                <div>
                    <header className="header">Exploring Robotics</header>
                    <p className="sub">NSF LSAMP Bridge to Baccalaureate <br/> 
                    Virtual Undergraduate Research Experience</p>
                    <p>by Chanis Torres</p>
                </div> 
                
            </div>

          <hr class="hr-intro"></hr>

          <Introduction/>
          {/* <div class="button_cont" 
          align="center"><Link class="button" to='/Journal' href='#HomePage'>
            Continue</Link>
          </div> */}
            
            <div >
            <Link to='/Journal' class="btn6" >Continue</Link>
            </div>
    </div>
    )
}

export default Header;