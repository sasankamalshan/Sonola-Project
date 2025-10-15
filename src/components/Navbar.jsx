import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Added useLocation import
import {
  FaHome,
  FaFolder,
  FaFileAlt,
  FaUpload,
  FaEllipsisH,
  FaLifeRing,
  FaCog,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { label: "Home", icon: <FaHome />, path: "/home" },
    { label: "Projects", icon: <FaFolder />, path: "/projects" },
    { label: "Templates", icon: <FaFileAlt />, path: "/templates" },
    { label: "Uploads", icon: <FaUpload />, path: "/uploads" },
    { label: "More", icon: <FaEllipsisH />, path: "/more" },
];

const utilityLinks = [
    { label: "Help", icon: <FaLifeRing />, path: "/help" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
    { label: "Profile", icon: <FaUser />, path: "/profile" },
];

const SidebarItem = ({ name, Icon, isActive, onClick }) => {
  // We remove 'w-full' and center the content since the text will not fit in 96px
  const baseClasses = 'flex justify-center p-3 my-1 cursor-pointer transition-colors duration-200 rounded-xl';
  const activeClasses = 'bg-blue-600 text-white shadow-lg shadow-blue-500/50';
  const inactiveClasses = 'text-gray-400 hover:bg-gray-800 hover:text-white';

  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation(); // ✅ Now properly defined

  // Hide Navbar on Welcome Page
  if (location.pathname === "/") return null;

  return (
    <nav
      className={`bg-[#1F1F1F] text-white min-h-screen p-4 shadow-lg fixed top-0 left-0 z-20
        transition-all duration-300 ${collapsed ? "w-16" : "w-64"} block`}
    >
      <button
        className="md:hidden absolute top-4 right-4 text-white"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "☰" : "✕"}
      </button>

      <ul className="mt-8">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center gap-3 p-2 rounded transition-colors duration-200 
                  ${isActive ? "bg-[#2A2A2A]" : "hover:bg-[#232323]"}`}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
}

export default Navbar;