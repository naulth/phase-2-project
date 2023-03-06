import React from 'react'
import '../App.css';
import Home from "./Home"
import Cards from './Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Cards />
        
      </header>
    </div>
  );
}

export default App;
