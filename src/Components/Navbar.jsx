import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCodepen, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const location = useLocation();

  // Define all navigation links with names and paths
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Create order', path: '/create-order' },
    { name: 'Find a job', path: '/find-job' },
    { name: 'Categories', path: '/categories' },
    { name: 'Contact', path: '/contact' },
    { name: 'Imprint', path: '/imprint' },
    { name: 'Data protection', path: '/data-protection' },
  ];

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 font-sans transition-all duration-300 ${
        isSticky
          ? 'fixed top-0 bg-[#0a2540]/95 backdrop-blur-md shadow-md'
          : 'relative bg-[#0a2540]'
      } text-white py-4`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaCodepen className="text-3xl text-cyan-400" />
          <span className="text-2xl font-bold tracking-wide">BOB</span>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 text-[16px] font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
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

        {/* Right-side Icons + Search */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button
            onClick={() => {
              setIsSearchOpen(!isSearchOpen);
              if (!isSearchOpen) setIsMenuOpen(false);
            }}
            className="focus:outline-none"
          >
            <FaSearch className="text-xl hover:text-cyan-400 transition-colors duration-300" />
          </button>

          {/* Search Input */}
          {isSearchOpen && (
            <div className="ml-2 flex items-center transition-all duration-300">
              <input
                type="text"
                placeholder="Search..."
                className="bg-white text-black px-3 py-1.5 rounded-md border border-gray-300 w-48 md:w-64 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 placeholder-gray-500 text-sm"
                autoFocus
              />
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (!isMenuOpen) setIsSearchOpen(false);
              }}
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center space-y-4 bg-[#0a2540] pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`capitalize hover:text-cyan-400 py-2 ${
                location.pathname === link.path
                  ? 'font-semibold text-cyan-400'
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
