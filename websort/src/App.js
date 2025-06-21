// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home';
import Project from './components/Projects/Project';
import Services from './components/Services/Services';
import Careers from './components/Careers/Careers';
import Contactus from './components/Contactus/Contactus';

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} /> {/* ✅ Renders Home.js for About */}
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
