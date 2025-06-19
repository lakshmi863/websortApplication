import React from 'react';
import Navbar from './components/Navbar/Navbar'; 
import './index.css';


function App() {
  return (
    <div>
      <Navbar />
      
      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-3xl font-bold text-center mt-10">Welcome to MyCompany</h2>
        <p className="text-center text-gray-700 mt-4">
          This is a demo React application with a responsive navbar and logo.
        </p>
      </main>
    </div>
  );
}

export default App;
