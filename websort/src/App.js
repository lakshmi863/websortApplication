import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Home from './pages/Home';
import './index.css';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <main >
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;