import React from 'react';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  return (
    <div className="container">
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Oferaça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa

          <form>
            <label htmlFor="email">EMAIL *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Your best email" 
            />
            <button type="submit" >Enter</button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default App;
