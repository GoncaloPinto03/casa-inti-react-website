import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default App;
