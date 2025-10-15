// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import the new components
import WelcomePage from './components/WelcomePage';
import Homepage from './Homepage';
function App() {
  return (
    <Router>
      <div className="flex bg-gray-50">
        

        <main className="flex-1">
          {/* Your page routes would go here */}
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path='/home' element={<Homepage/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;