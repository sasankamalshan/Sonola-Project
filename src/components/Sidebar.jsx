import { Link, useLocation } from 'react-router-dom';

// --- Icon Components defined directly in the file ---

const HomeIcon = (props) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M1.58691 8.75L10.4406 1.93944C10.7138 1.72935 10.8503 1.62431 10.9963 1.57141C11.2164 1.49171 11.4574 1.49171 11.6775 1.57141C11.8235 1.62431 11.9601 1.72935 12.2332 1.93944L21.0869 8.75M19.5869 7.59615V16.34C19.5869 17.6534 19.5869 18.3101 19.3848 18.8325C19.08 19.6203 18.4572 20.2432 17.6693 20.548C17.147 20.75 16.4903 20.75 15.1769 20.75H14.3369M3.08691 7.59615V16.34C3.08691 17.6534 3.08691 18.3101 3.289 18.8325C3.59379 19.6203 4.21663 20.2432 5.00448 20.548C5.52683 20.75 6.18353 20.75 7.49691 20.75H8.33691M8.33691 20.75V13.97C8.33691 13.5322 8.33691 13.3133 8.40428 13.1392C8.50587 12.8766 8.71349 12.669 8.9761 12.5674C9.15022 12.5 9.36912 12.5 9.80691 12.5H12.8669C13.3047 12.5 13.5236 12.5 13.6977 12.5674C13.9603 12.669 14.168 12.8766 14.2696 13.1392C14.3369 13.3133 14.3369 13.5322 14.3369 13.97V20.75M8.33691 20.75H14.3369"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ProjectsIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20 17L20 9C20 7.89543 19.1046 7 18 7L12.5 7C11.9477 7 11.5 6.55228 11.5 6L11.5 5C11.5 3.89543 10.6046 3 9.5 3L6 3C4.89543 3 4 3.89543 4 5L4 17C4 18.1046 4.89543 19 6 19L18 19C19.1046 19 20 18.1046 20 17Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TemplatesIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const UploadsIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 16.5V3M12 3L16.5 7.5M12 3L7.5 7.5M21 12.5V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V12.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MoreIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <circle cx="6" cy="12" r="1.5" fill="currentColor" />
    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const HelpIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 15.5V12.5C12 11.4267 12.2833 10.9667 13.5 10C14.4375 9.25 15 8.625 15 7.5C15 6.11929 13.6569 5 12 5C10.3431 5 9 6.11929 9 7.5"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="17.5" r="0.5" fill="currentColor" />
  </svg>
);

const SettingsIcon = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor" strokeWidth="1.5" />
    <path d="M19.3137 12C19.3137 12.793 19.1378 13.562 18.8131 14.256L20.8491 15.82C21.0315 15.968 21.0632 16.232 20.9298 16.428L18.8298 19.928C18.6963 20.124 18.4328 20.169 18.2381 20.038L15.9151 18.452C15.1111 18.922 14.2091 19.213 13.2531 19.29L12.8701 21.8C12.8461 21.966 12.7091 22.1 12.5411 22.1H9.45906C9.29106 22.1 9.15406 21.966 9.13006 21.8L8.74706 19.29C7.79106 19.213 6.88906 18.922 6.08506 18.452L3.76206 20.038C3.56706 20.169 3.30306 20.124 3.17006 19.928L1.07006 16.428C0.936062 16.232 0.968062 15.968 1.15106 15.82L3.18706 14.256C2.86206 13.562 2.68606 12.793 2.68606 12C2.68606 11.207 2.86206 10.438 3.18706 9.744L1.15106 8.18C0.968062 8.032 0.936062 7.768 1.07006 7.572L3.17006 4.072C3.30306 3.876 3.56706 3.831 3.76206 3.962L6.08506 5.548C6.88906 5.078 7.79106 4.787 8.74706 4.71L9.13006 2.2C9.15406 2.034 9.29106 1.9 9.45906 1.9H12.5411C12.7091 1.9 12.8461 2.034 12.8701 2.2L13.2531 4.71C14.2091 4.787 15.1111 5.078 15.9151 5.548L18.2381 3.962C18.4328 3.831 18.6963 3.876 18.8298 4.072L20.9298 7.572C21.0632 7.768 21.0315 8.032 20.8491 8.18L18.8131 9.744C19.1378 10.438 19.3137 11.207 19.3137 12Z"
      stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

// --- Navigation and Utility Item Arrays ---

const navItems = [
  { label: 'Home', path: '/home', Icon: HomeIcon },
  { label: 'Projects', path: '/projects', Icon: ProjectsIcon },
  { label: 'Templates', path: '/templates', Icon: TemplatesIcon },
  { label: 'Uploads', path: '/uploads', Icon: UploadsIcon },
  { label: 'More', path: '/more', Icon: MoreIcon },
];

const utilityItems = [
  { label: 'Help', path: '/help', Icon: HelpIcon },
  { label: 'Settings', path: '/settings', Icon: SettingsIcon },
];

// --- Main Sidebar Component ---

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      {/* Main Navigation Section */}
      <nav className="sidebar-nav">
        <ul>
          {navItems.map(({ label, path, Icon }) => (
            <li key={label}>
              <Link
                to={path}
                className={`nav-item ${location.pathname === path ? 'active' : ''}`}
              >
                <div className="nav-icon-wrapper">
                  <Icon className="nav-icon" />
                </div>
                <span className="nav-label">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Utility Section */}
      <div className="sidebar-bottom">
        <nav className="utility-nav">
          <ul>
            {utilityItems.map(({ label, path, Icon }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`nav-item ${location.pathname === path ? 'active' : ''}`}
                >
                  <div className="nav-icon-wrapper">
                    <Icon className="nav-icon" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User Profile */}
        <div className="sidebar-profile">
          <div className="profile-avatar">
            <img 
              src="./public/profile.jpg" 
              alt="User Avatar" 
              className="avatar-img"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;