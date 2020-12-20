import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import Introduction from './Introduction';
import tank from '../images/arm-tank.png';

function Header() {
    return(
    <div>
            <div>
                <img src = {tank} className="tank"/>

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