import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Registration from './components/Registration';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Organizers from './components/Organizers';
import Sponsors from './components/Sponsors';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Registration />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Organizers />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
