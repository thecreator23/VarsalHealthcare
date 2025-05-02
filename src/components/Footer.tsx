import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-varsal-darkblue text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Varsal Healthcare</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about#vision" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Vision
                </Link>
              </li>
              <li>
                <Link to="/about#values" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Values
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Operation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/products#quality" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Quality
                </Link>
              </li>
            </ul>
          </div>

          {/* Investors Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Investors</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/investors#shareholders" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Shareholder Info
                </Link>
              </li>
              <li>
                <Link to="/investors#financials" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Financials
                </Link>
              </li>
              <li>
                <Link to="/investors#annual-report" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Annual Report
                </Link>
              </li>
            </ul>
          </div>

          {/* Work With Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Work With Us</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/careers" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact#partner" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src="/varsal-logo.png" 
              alt="Varsal Healthcare Logo" 
              className="h-12 mb-2 mx-auto md:mx-0"
            />
            <p className="text-sm text-gray-300">
              Enhancing Quality of Life
            </p>
          </div>
          <div className="text-sm text-gray-300">
            <p>© {currentYear} Varsal Healthcare. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-end">
              <Link to="/privacy-policy" className="hover:text-varsal-lightblue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-varsal-lightblue transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
