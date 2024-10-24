import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdSunny, IoIosMoon, IoMdMenu, IoMdClose } from 'react-icons/io';
import { useTheme } from '../assets/Additionals/ThemeContext'; // Import the useTheme hook
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Use theme context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with desired settings
  }, []);

  const menus = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Projects', href: '#projects' },
    { title: 'Contacts', href: '#contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Function to toggle menu

  return (
    <nav
      className=" w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-500 z-50"
      data-aos="fade-down"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold" data-aos="zoom-in">
          <span className='text-blue-500'>Priyanshi</span>
        </div>

        {/* Hamburger Menu for mobile */}
        <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose className="h-8 w-8 text-black dark:text-white" /> : <IoMdMenu className="h-8 w-8 text-black dark:text-white" />}
        </div>

        {/* Links */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:flex md:items-center absolute md:static bg-white dark:bg-gray-800 w-full md:w-auto top-full left-0 md:top-auto md:left-auto transition-all duration-300 md:space-x-8`}
        >
          {/* Centering the links for all screens */}
          <div className="flex flex-col md:flex-row justify-center w-full items-center md:w-auto">
            {menus.map((menu) => (
              <li key={menu.title} data-aos="fade-up" className="mx-2 my-2 md:my-0">
                <motion.a
                  href={menu.href} // Link to section ID
                  className={`relative text-black dark:text-white py-2 px-4 transition duration-300 rounded-lg tilt`} // Add tilt class
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: darkMode ? '#181818' : '#F9FAFB',
                    boxShadow: darkMode
                      ? '0px 4px 15px rgba(173, 216, 230, 0.7)' // Light blue
                      : '0px 4px 15px rgba(255, 192, 203, 0.7)', // Light pink
                    color: darkMode ? '#FFFFFF' : '#000000',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                >
                  {menu.title}
                </motion.a>
              </li>
            ))}
          </div>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-6 text-black dark:text-white p-2 rounded-full border-2 border-gray-400 dark:border-gray-600 focus:outline-none bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
          data-aos="fade-left"
        >
          {darkMode ? (
            <IoMdSunny className="h-6 w-6 text-yellow-400" />
          ) : (
            <IoIosMoon className="h-6 w-6 text-black" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
