
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Avanish Dwivedi</Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors">About</Link>
            <Link to="/education" className="hover:text-blue-300 transition-colors">Education</Link>
            <Link to="/skills" className="hover:text-blue-300 transition-colors">Skills</Link>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="block py-2 hover:bg-gray-700 px-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block py-2 hover:bg-gray-700 px-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/education" 
              className="block py-2 hover:bg-gray-700 px-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link 
              to="/skills" 
              className="block py-2 hover:bg-gray-700 px-2 rounded"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
