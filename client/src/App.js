import react,{ useEffect, useState } from 'react';
import './App.css';
import {transactProfile} from './API';
import { NavBar, Heading, Profile, Profile2, TransactionScreen } from './components/imports';

function App() {

  
  return (
    <div className="App">
      <div className="first-section">
        <NavBar />
        <Heading />
       <div className="split">
        <Profile />
        <Profile2 />
       </div>
      </div>
      <div className="other-section">
        <TransactionScreen />
      </div> 
    </div>
  );
}

export default App;
