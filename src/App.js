import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Introduction from './components/Introduction';
import Navigation from './components/Navigation';
import Oct30 from './components/Oct30';
import Nov6 from './components/Nov6';
import Nov13 from './components/Nov13';
import Nov20 from './components/Nov20';
import Acknowledgement from './components/Acknowledgements'


import tank from './images/arm-tank.png'

function App() {


  return (

    <div className="App" id="nav">

      {/* <Route exact path="/"> */}

        <div className="head">
          <img src = {tank} className="tank"/>
          <header className="header">Exploring Robotics</header>
        
          <p className="sub">NSF LSAMP Bridge to Baccalaureate <br/> 
          Virtual Undergraduate Research Experience</p>
          <p className="name">Chanis Torres</p>
        
        </div>
       
      {/* </Route> */}

      <Navigation/>
      <div>

        <Route path="/Introduction" component={Introduction}/>
        <Route path="/Oct30" component={Oct30}/>
        <Route path="/Nov6" component={Nov6}/>
        <Route path="/Nov13" component={Nov13}/>
        <Route path="/Nov20" component={Nov20}/>
        <Route path="/Acknowledgement" component={Acknowledgement}/>
  
      </div>
    </div>
  );
};

export default App;

