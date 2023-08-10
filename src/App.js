import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Location from './components/Location';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Reviews/>
      <Location/>
      <Contact/>
      <ScrollToTop/>
      <Footer/>
    </div>
  );
}

export default App;
