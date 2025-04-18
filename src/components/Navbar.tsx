
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/varsal-logo.png" 
            alt="Varsal Healthcare Logo" 
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            About Us
          </Link>
          <Link to="/products" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Products
          </Link>
          <Link to="/investors" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Investors
          </Link>
          <Link to="/careers" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Careers
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <Link 
              to="/" 
              className="py-3 text-gray-800 hover:text-varsal-darkblue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="py-3 text-gray-800 hover:text-varsal-darkblue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              className="py-3 text-gray-800 hover:text-varsal-darkblue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/investors" 
              className="py-3 text-gray-800 hover:text-varsal-darkblue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Investors
            </Link>
            <Link 
              to="/careers" 
              className="py-3 text-gray-800 hover:text-varsal-darkblue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="py-3 text-gray-800 hover:text-varsal-darkblue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
