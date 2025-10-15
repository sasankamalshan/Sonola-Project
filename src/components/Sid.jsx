// // src/components/Navbar.jsx

// import React, { createContext, useContext, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   FaHome,
//   FaFolder,
//   FaFileAlt,
//   FaUpload,
//   FaEllipsisH,
//   FaQuestionCircle,
//   FaCog,
// } from 'react-icons/fa';
// import { FiChevronLeft, FiChevronRight, FiMoreVertical } from 'react-icons/fi';
// import { Sidebar } from 'lucide-react';

// const SidebarContext = createContext({ expanded: true });

// const navItems = [
//   { label: 'Home', path: '/home', Icon: FaHome },
//   { label: 'Projects', path: '/projects', Icon: FaFolder },
//   { label: 'Templates', path: '/templates', Icon: FaFileAlt },
//   { label: 'Uploads', path: '/uploads', Icon: FaUpload },
//   { label: 'More', path: '/more', Icon: FaEllipsisH },
// ];

// const utilityItems = [
//   { label: 'Help', path: '/help', Icon: FaQuestionCircle },
//   { label: 'Settings', path: '/settings', Icon: FaCog },
// ];

// const SidebarItem = ({ Icon, label, to, active, alert }) => {
//   const { expanded } = useContext(SidebarContext);

//   return (
//     <li className="relative group">
//       <Link
//         to={to}
//         className={`flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium transition-colors duration-200
//           ${expanded ? '' : 'justify-center'}
//           ${
//             active
//               ? 'bg-blue-600 text-white shadow-blue-200 shadow-sm'
//               : 'text-gray-600 hover:bg-gray-100'
//           }`}
//       >
//         <Icon className="text-lg" />
//         <span
//           className={`origin-left whitespace-nowrap transition-all duration-200 inline-flex overflow-hidden
//             ${expanded ? 'opacity-100 translate-x-0' : 'w-0 opacity-0 -translate-x-2'}
//           `}
//         >
//           {label}
//         </span>
//       </Link>
//       {alert && (
//         <span
//           className={`absolute right-2 h-2 w-2 rounded-full bg-blue-400
//             ${expanded ? 'top-1/2 -translate-y-1/2' : 'top-2'}
//           `}
//         />
//       )}
//       {!expanded && (
//         <span
//           className="pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
//         >
//           {label}
//         </span>
//       )}
//     </li>
//   );
// };

// const abcd = () => {
//   const [expanded, setExpanded] = useState(true);
//   const location = useLocation();
//   const currentPath = location.pathname;

//   return (
//     <SidebarContext.Provider value={{ expanded }}>
//       <aside className="h-screen">
//         <nav
//           className={`h-full flex flex-col border-r border-gray-200 bg-white shadow-sm transition-all duration-300
//             ${expanded ? 'w-64' : 'w-24'}
//           `}
//         >
//           <div className="flex items-center justify-between px-4 pt-6 pb-4">
//             <div className="flex items-center gap-1">
//               <span className="inline-block h-2 w-2 rounded-full bg-gray-300" />
//               <span className="inline-block h-2 w-2 rounded-full bg-gray-300" />
//               <span className="inline-block h-2 w-2 rounded-full bg-gray-300" />
//             </div>
//             <button
//               type="button"
//               onClick={() => setExpanded((prev) => !prev)}
//               className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-gray-200"
//               aria-label={expanded ? 'Collapse sidebar' : 'Expand sidebar'}
//             >
//               {expanded ? <FiChevronLeft size={16} /> : <FiChevronRight size={16} />}
//             </button>
//           </div>

//           <ul className="flex-1 space-y-1 px-3">
//             {navItems.map(({ Icon, label, path }) => {
//               const active = currentPath === path || currentPath.startsWith(`${path}/`);
//               return (
//                 <SidebarItem
//                   key={path}
//                   Icon={Icon}
//                   label={label}
//                   to={path}
//                   active={active}
//                 />
//               );
//             })}
//           </ul>

//           <div className="mt-auto px-3 pb-6">
//             <ul className="space-y-1 border-t border-gray-200 pt-4">
//               {utilityItems.map(({ Icon, label, path }) => {
//                 const active = currentPath === path || currentPath.startsWith(`${path}/`);
//                 return (
//                   <SidebarItem
//                     key={path}
//                     Icon={Icon}
//                     label={label}
//                     to={path}
//                     active={active}
//                   />
//                 );
//               })}
//             </ul>

//             <div
//               className={`mt-4 flex items-center rounded-2xl bg-gray-50 px-3 py-2 transition-all duration-200 shadow-sm
//                 ${expanded ? 'justify-between' : 'justify-center'}
//               `}
//             >
//               <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#CF65F4] to-[#952CB9] p-[2px] shadow-md">
//                 <img
//                   src="https://i.pravatar.cc/40?img=1"
//                   alt="User avatar"
//                   className="h-full w-full rounded-full object-cover"
//                 />
//               </div>
//               {expanded && (
//                 <div className="ml-3 flex flex-1 items-center justify-between">
//                   <div className="leading-tight">
//                     <p className="text-sm font-semibold text-gray-800">John Doe</p>
//                     <p className="text-xs text-gray-500">john.doe@example.com</p>
//                   </div>
//                   <FiMoreVertical className="text-gray-400" />
//                 </div>
//               )}
//             </div>
//           </div>
//         </nav>
//       </aside>
//     </SidebarContext.Provider>
//   );
// };


// export default abcd;