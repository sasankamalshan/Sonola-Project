import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomePage.jsx';
import Homepage from './Homepage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </Router>
  </StrictMode>
);
