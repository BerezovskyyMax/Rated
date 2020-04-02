import React from 'react';
import './App.css';

import Card from './components/Card/Card';
import Grid from './components/StackGrid/Grid';
import Navbar from './components/Navbar/navbar.component';
import Footer from './components/Footer/Footer.jsx';


function App() {
  return (
    <div>
      <Navbar/>
        <Card/>
        <Grid/>
      <Footer/>
    </div>
  );
}

export default App;
