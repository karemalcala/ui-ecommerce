import React from 'react';
import './App.css';
import Home from "./pages/home"
import StaticContext from './context/StaticContext'

function App() {
  return (
    <StaticContext.Provider>
      <div className="App">
      <Home/>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
