import React from 'react';
import logo from './logo.svg';
import './App.css';

import RoxTest from './RoxTest';
import FlagsmithTest from './FlagsmithTest';
import SplitTest from './SplitTest';
import LaunchDarklyTest from './LaunchDarklyTest';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* <RoxTest />      
      <FlagsmithTest /> */}
      <SplitTest />
      <LaunchDarklyTest />

    </div>
  );
}

export default App;
