import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
