import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "certificates", label: "Certificates" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [navOpen, setNaveOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="w-full fixed top-0 left-0 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">My PortFolio</h1>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              to={link.id}
              smooth={true}
              duration={500}
              key={link.id}
              offset={-50}
              className="cursor-pointer text-gray-500 hover:text-blue-600 font-medium transition">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setNaveOpen(!navOpen)}>
            {navOpen ? (
              <FaTimes className="text-2xl text-blue-600" />
            ) : (
              <FaBars className="text-2xl text-blue-600" />
            )}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden bg-white py-4 space-y-4 flex flex-col items-center shadow px-4">
          {navLinks.map((item) => (
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              key={item.id}
              onClick={() => setNaveOpen(!navOpen)}
              className="cursor-pointer text-gray-600 transition text-lg hover:text-blue-600 font-medium"
              offset={-50}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
