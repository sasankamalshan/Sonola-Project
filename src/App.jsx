// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomeScreen from './components/WelcomePage';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar / Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/project" element={<div>Project Page</div>} />
            <Route path="/template" element={<div>Template Page</div>} />
            <Route path="/upload" element={<div>Upload Page</div>} />
            <Route path="/more" element={<div>More Page</div>} />
            <Route path="/support" element={<div>Support Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;