import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaPlusCircle,
  FaSearch,
  FaBriefcase,
  FaListUl,
  FaEnvelope,
  FaUserShield,
  FaShieldAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Create order', path: '/create-order', icon: <FaPlusCircle /> },
    { name: 'Find a job', path: '/find-job', icon: <FaBriefcase /> },
    { name: 'Categories', path: '/categories', icon: <FaListUl /> },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
    { name: 'Imprint', path: '/imprint', icon: <FaUserShield /> },
    { name: 'Data protection', path: '/data-protection', icon: <FaShieldAlt /> },
  ];

  // Sticky navbar for desktop
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top helper
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close sidebar when navigating
  const handleLinkClick = () => {
    setIsSidebarOpen(false);
    handleScrollToTop();
  };

  return (
    <>
      {/* ================================== */}
      {/* ===== DESKTOP & TABLET NAVBAR ===== */}
      {/* ================================== */}
      <nav
        className={`hidden md:block w-full z-50 font-sans transition-all duration-300 ${
          isSticky
            ? 'fixed top-0 bg-[#0a2540]/95 backdrop-blur-md shadow-md'
            : 'relative bg-[#0a2540]'
        } text-white`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to="/" onClick={handleScrollToTop} className="flex items-center space-x-2">
            <img src={logo} alt="BOB Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold tracking-wide text-white">BOB</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6 text-base font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={handleScrollToTop}
                className={`capitalize transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-cyan-400 font-semibold'
                    : 'hover:text-cyan-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Search */}
          <div className="flex items-center space-x-2 relative">
            <input
              type="text"
              placeholder="Search..."
              className={`transition-all duration-300 ease-in-out bg-white text-black placeholder-gray-500 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                isSearchOpen
                  ? 'w-48 sm:w-56 px-3 py-1.5 opacity-100'
                  : 'w-0 opacity-0 px-0 py-0 border-0'
              }`}
            />
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="focus:outline-none"
            >
              <FaSearch className="text-xl hover:text-cyan-400 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================================== */}
      {/* ===== MOBILE TOP HEADER ======= */}
      {/* ================================== */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-[#0a2540] text-white z-50 border-b border-white/10">
        <div className="flex justify-between items-center px-4 h-14">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 text-white focus:outline-none"
          >
            <FaBars className="text-xl" />
          </button>

          {/* Logo */}
          <Link to="/" onClick={handleScrollToTop} className="flex items-center space-x-2">
            <img src={logo} alt="BOB Logo" className="w-8 h-8 object-contain" />
            <span className="text-lg font-bold tracking-wide">BOB</span>
          </Link>

          {/* Mobile Search */}
          <div className="flex items-center justify-end">
            <input
              type="text"
              placeholder="Search..."
              className={`bg-white text-black rounded-md placeholder-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300 ease-in-out ${
                isSearchOpen ? 'w-40 px-3 py-1.5' : 'w-0 p-0 border-none'
              }`}
            />
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="focus:outline-none p-2 ml-1"
            >
              <FaSearch className="text-lg" />
            </button>
          </div>
        </div>
      </header>

      {/* ================================== */}
      {/* ===== MOBILE SIDEBAR PANEL ======= */}
      {/* ================================== */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0a2540] text-white transform transition-transform duration-300 z-[60] shadow-lg ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="BOB Logo" className="w-8 h-8 object-contain" />
            <span className="text-xl font-bold">BOB</span>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-2 font-medium text-base">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleLinkClick}
              className={`py-2 px-3 rounded-md transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'hover:bg-white/10 text-gray-200'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* ================================== */}
      {/* ===== MOBILE BOTTOM NAVBAR ======= */}
      {/* ================================== */}
      <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-[#0a2540] text-white z-50 border-t border-white/10">
        <div className="flex justify-around items-center py-2">
          {navLinks.slice(0, 5).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={handleScrollToTop}
              className={`flex flex-col items-center w-full pt-1 transition-colors duration-300 ${
                location.pathname === link.path
                  ? 'text-cyan-400'
                  : 'text-gray-300 hover:text-cyan-300'
              }`}
            >
              <span className="text-lg mb-1">{link.icon}</span>
              <span className="font-medium text-xs">{link.name.split(' ')[0]}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;













// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import {
//   FaHome,
//   FaPlusCircle,
//   FaSearch,
//   FaBriefcase,
//   FaListUl,
//   FaEnvelope,
//   FaUserShield,
//   FaShieldAlt,
// } from 'react-icons/fa';
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/', icon: <FaHome /> },
//     { name: 'Create order', path: '/create-order', icon: <FaPlusCircle /> },
//     { name: 'Find a job', path: '/find-job', icon: <FaBriefcase /> },
//     { name: 'Categories', path: '/categories', icon: <FaListUl /> },
//     { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
//     { name: 'Imprint', path: '/imprint', icon: <FaUserShield /> },
//     { name: 'Data protection', path: '/data-protection', icon: <FaShieldAlt /> },
//   ];

//   // Sticky navbar logic
//   useEffect(() => {
//     const handleScroll = () => setIsSticky(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Smooth scroll to top
//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <>
//       {/* ================================== */}
//       {/* ====== DESKTOP & TABLET NAVBAR ===== */}
//       {/* ================================== */}
//       <nav
//         className={`hidden md:block w-full z-50 font-sans transition-all duration-300 ${
//           isSticky
//             ? 'fixed top-0 bg-[#0a2540]/95 backdrop-blur-md shadow-md'
//             : 'relative bg-[#0a2540]'
//         } text-white`}
//       >
//         <div className="container mx-auto flex justify-between items-center px-6 py-4">
//           {/* Logo */}
//           <Link to="/" onClick={handleScrollToTop} className="flex items-center space-x-2">
//             <img src={logo} alt="BOB Logo" className="w-10 h-10 object-contain" />
//             <span className="text-2xl font-bold tracking-wide text-white">BOB</span>
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden md:flex items-center space-x-6 text-base font-medium">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={handleScrollToTop}
//                 className={`capitalize transition-colors duration-300 ${
//                   location.pathname === link.path
//                     ? 'text-cyan-400 font-semibold'
//                     : 'hover:text-cyan-300'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Desktop Search (inline & aligned) */}
//           <div className="flex items-center space-x-2 relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className={`transition-all duration-300 ease-in-out bg-white text-black placeholder-gray-500 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
//                 isSearchOpen
//                   ? 'w-48 sm:w-56 px-3 py-1.5 opacity-100'
//                   : 'w-0 opacity-0 px-0 py-0 border-0'
//               }`}
//               style={{
//                 boxShadow: isSearchOpen ? '0 0 6px rgba(0,0,0,0.15)' : 'none',
//               }}
//             />
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="focus:outline-none"
//             >
//               <FaSearch className="text-xl hover:text-cyan-400 transition-colors duration-300" />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* ================================== */}
//       {/* ======== MOBILE TOP HEADER ======= */}
//       {/* ================================== */}
//       <header className="md:hidden fixed top-0 left-0 right-0 bg-[#0a2540] text-white z-50 border-b border-white/10">
//         <div className="container mx-auto flex justify-between items-center px-4 h-14 font-sans text-base sm:text-lg">
//           {/* Logo */}
//           <Link to="/" onClick={handleScrollToTop} className="flex items-center space-x-2">
//             <img src={logo} alt="BOB Logo" className="w-8 h-8 object-contain" />
//             <span className="text-lg sm:text-xl font-bold tracking-wide">BOB</span>
//           </Link>

//           {/* Mobile Search */}
//           <div className="flex items-center justify-end">
//             <input
//               type="text"
//               placeholder="Search..."
//               className={`bg-white text-black rounded-md placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300 ease-in-out ${
//                 isSearchOpen ? 'w-40 sm:w-48 px-3 py-1.5' : 'w-0 p-0 border-none'
//               }`}
//               style={{
//                 paddingRight: isSearchOpen ? '0.75rem' : '0',
//                 boxShadow: isSearchOpen ? '0 0 6px rgba(0,0,0,0.15)' : 'none',
//               }}
//             />
//             <button
//               onClick={() => setIsSearchOpen(!isSearchOpen)}
//               className="focus:outline-none p-2 ml-1"
//             >
//               <FaSearch className="text-lg" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* ================================== */}
//       {/* ===== MOBILE BOTTOM NAVBAR ======= */}
//       {/* ================================== */}
//       <nav className="fixed md:hidden bottom-0 left-0 right-0 bg-[#0a2540] text-white z-50 font-sans text-sm sm:text-base">
//         <div className="flex justify-around items-center py-2">
//           {navLinks.slice(0, 5).map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               onClick={handleScrollToTop}
//               className={`flex flex-col items-center w-full pt-1 transition-colors duration-300 ${
//                 location.pathname === link.path
//                   ? 'text-cyan-400'
//                   : 'text-gray-300 hover:text-cyan-300'
//               }`}
//             >
//               <span className="text-lg mb-1">{link.icon}</span>
//               <span className="font-medium">{link.name.split(' ')[0]}</span>
//             </Link>
//           ))}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
