import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Journal from './components/HomePage';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/Journal' component={Journal} />
          <Route exact path='/' component={Header} />
          
        </Switch>
    </div>
  );
}

export default App;
