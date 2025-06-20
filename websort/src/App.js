import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import Home from './components/Home/Home'
import './index.css';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div>
      <Navbar />
      
      {/* Main Content */}
      <main className="p-6">
       <Home/>
       <Footer/>
      </main>
    </div>
  );
}

export default App;
