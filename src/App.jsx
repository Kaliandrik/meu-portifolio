import React from 'react';
import './App.css'; // Caminho direto, conforme sua estrutura

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      
      <main>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;