import { Link } from "react-router-dom";
import logo from "../Assets/Logo/LOGO.png"; 

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
                <a href="/about#vision" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Vision
                </a>
              </li>
              <li>
                <a href="/about#values" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Values
                </a>
              </li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Operation</h3>
            <ul className="space-y-2">
              <li>
                <a href="/products" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="/products#quality" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Quality
                </a>
              </li>
            </ul>
          </div>

          {/* Investors Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Investors</h3>
            <ul className="space-y-2">
              <li>
                <a href="/investors#shareholders" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Shareholder Info
                </a>
              </li>
              <li>
                <a href="/investors#financials" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Financials
                </a>
              </li>
              <li>
                <a href="/investors#annual-report" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Annual Report
                </a>
              </li>
            </ul>
          </div>

          {/* Work With Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Work With Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="/careers" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Quick as Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick as</h3>
            <ul className="space-y-2">
              <li>
                <a href="/contact" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/contact#partner" className="text-gray-200 hover:text-varsal-lightblue transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <img 
              src={logo}
              width={100}
              alt="Varsal Healthcare Logo" 
              className="h-12 mb-2 mx-auto md:mx-0 rounded-[50%] shadow-lg"
            />
            <p className="text-sm text-gray-300">
              Enhancing Quality of Life
            </p>
          </div>
          <div className="text-sm text-gray-300">
            <p>© {currentYear} Varsal Healthcare. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 justify-center md:justify-end">
              <a href="/privacy-policy" className="hover:text-varsal-lightblue transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-varsal-lightblue transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
