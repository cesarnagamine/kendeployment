import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Landing';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      
        <div><Landing/></div>  
        
      </header>
    </div>
  );
}

export default App;
