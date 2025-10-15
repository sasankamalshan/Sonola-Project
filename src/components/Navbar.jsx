import { useLocation } from "react-router-dom";

// Search Icon Component
const SearchIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="search-icon"
  >
    <circle 
      cx="11" 
      cy="11" 
      r="7" 
      stroke="currentColor" 
      strokeWidth="2"
    />
    <path 
      d="M16 16L21 21" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

// Sparkle Icon Component (Apple-style)
const SparkleIcon = () => (
  <svg 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="sparkle-icon"
  >
    <path 
      d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" 
      fill="currentColor"
    />
    <path 
      d="M19 3L19.75 5.25L22 6L19.75 6.75L19 9L18.25 6.75L16 6L18.25 5.25L19 3Z" 
      fill="currentColor"
      opacity="0.6"
    />
  </svg>
);

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      {/* Left Side - Logo */}
      <div className="navbar-logo">
        <img src="/watermark.png" alt="Sonola" className="logo-image" />
      </div>

      {/* Center - Search Bar */}
      <div className="navbar-search">
        <div className="search-wrapper">
          <SearchIcon />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          
        </div>
      </div>

      {/* Right Side - Actions */}
      <div className="navbar-actions">
        <button className="try-pro-btn">
          <SparkleIcon />
          <span>Try Pro</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
