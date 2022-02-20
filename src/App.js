import React from 'react';
import './App.css';

import { Navbar } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
 

const App = () => {

  return (
<div className="App">
  <Navbar bg="info">
    <div className="container">
      <Navbar.Brand className="text-white">React chart js integration with axios and api public</Navbar.Brand>

    </div>
  </Navbar>
  <HomeScreen/>
</div>
  );
}

export default App;
