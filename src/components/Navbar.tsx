import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import logo from "../Assets/Logo/LOGO.png"; // Import the logo from Assets folder

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState<Array<{
    id: string;
    title: string;
    description: string;
    url: string;
    category: string;
  }>>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isMobile = useMobile();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Focus input when search is opened
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Generate search suggestions based on query
  useEffect(() => {
    // This would typically be an API call to your backend
    if (searchQuery.trim().length > 0) {
      // Enhanced mockResults with more website content
      const mockResults = [
        // Products
        {
          id: "1",
          title: "Advanced Medical Solutions",
          description: "Learn about our innovative healthcare solutions and medical devices.",
          url: "/products",
          category: "Products"
        },
        // About
        {
          id: "2",
          title: "Research & Development",
          description: "Discover our commitment to innovation and research in healthcare.",
          url: "/about",
          category: "Company"
        },
        // Careers
        {
          id: "3",
          title: "Senior Research Scientist",
          description: "Lead research initiatives for developing innovative healthcare solutions and oversee clinical trials for new medical devices.",
          url: "/careers",
          category: "Careers"
        },
        {
          id: "4",
          title: "Medical Device Engineer",
          description: "Design and develop innovative medical devices with a focus on user experience and clinical efficacy.",
          url: "/careers",
          category: "Careers"
        },
        {
          id: "5",
          title: "Quality Assurance Specialist",
          description: "Ensure compliance with quality standards and regulatory requirements for all medical products.",
          url: "/careers",
          category: "Careers"
        },
        // Investors
        {
          id: "6",
          title: "Q2 2025 Earnings Call",
          description: "Discussion of second-quarter financial results and business outlook.",
          url: "/investors",
          category: "Investors"
        },
        {
          id: "7",
          title: "Financial Reports",
          description: "Access our quarterly and annual financial reports for investors.",
          url: "/investors",
          category: "Investors"
        },
        // News/Updates
        {
          id: "8",
          title: "Q4 Financial Results",
          description: "Q4 Financial Results Show 15% Growth in Medical Device Sector",
          url: "/investors",
          category: "News"
        }
      ].filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchSuggestions(mockResults);
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  const handleSuggestionClick = (url: string) => {
    setShowSearch(false);
    setSearchQuery("");
    navigate(url);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo - Updated to use imported logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Varsal Healthcare Logo" 
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Home
          </a>
          <a href="/about" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            About Us
          </a>
          <a href="/products" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Products
          </a>
          <a href="/investors" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Investors
          </a>
          <a href="/careers" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Careers
          </a>
          <a href="/contact" className="text-gray-800 hover:text-varsal-darkblue font-medium transition-colors">
            Contact Us
          </a>
          <button 
            onClick={() => setShowSearch(true)} 
            className="text-gray-600 hover:text-varsal-darkblue transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setShowSearch(true)} 
            className="text-gray-600 hover:text-varsal-darkblue mr-4 transition-colors"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Button 
            variant="ghost" 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
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

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl overflow-hidden">
            <div className="relative">
              <form onSubmit={handleSearchSubmit}>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full py-4 px-12 text-lg focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <button 
                  type="button" 
                  onClick={() => setShowSearch(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              </form>
            </div>
            
            {/* Search Suggestions */}
            {searchQuery && (
              <div className="border-t">
                {searchSuggestions.length > 0 ? (
                  <div>
                    <div className="p-2">
                      <p className="text-sm text-gray-500 px-2 py-1">Suggested Results</p>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {searchSuggestions.map(suggestion => (
                        <div 
                          key={suggestion.id}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-100"
                          onClick={() => handleSuggestionClick(suggestion.url)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-gray-900">{suggestion.title}</h3>
                              <p className="text-sm text-gray-600 mt-1 line-clamp-1">{suggestion.description}</p>
                            </div>
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{suggestion.category}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 flex justify-between items-center bg-gray-50">
                      <p className="text-sm text-gray-500">Press Enter to see all results</p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-varsal-darkblue hover:text-varsal-blue flex items-center"
                        onClick={handleSearchSubmit}
                      >
                        View all results <ArrowRight size={14} className="ml-1" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-sm text-gray-500">No results found for "{searchQuery}"</p>
                    <p className="text-xs text-gray-400 mt-1">Try with a different search term</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
