import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Location from './components/Location';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Reviews/>
      <Location/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
