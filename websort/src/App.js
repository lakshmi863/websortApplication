// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home';
import Project from './components/Projects/Project'; 
import Services from './components/Services/Services';
import Careers from './components/Careers/Careers';

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Careers" element={<Careers />} />
          {/* Add more routes here like About, Services, etc. */}
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
