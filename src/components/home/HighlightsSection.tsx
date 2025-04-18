
import { CheckCircle2 } from "lucide-react";

const HighlightsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Why Choose Varsal Healthcare</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Varsal Healthcare, we combine cutting-edge technology with compassionate care to deliver healthcare solutions that truly make a difference in patients' lives.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle2 className="text-varsal-lightblue mr-3 h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Industry-Leading Innovation</h3>
                  <p className="text-gray-600">Our research and development team constantly works to create breakthrough healthcare technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="text-varsal-lightblue mr-3 h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                  <p className="text-gray-600">Every product undergoes rigorous testing and meets international quality standards before reaching our customers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="text-varsal-lightblue mr-3 h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Global Reach</h3>
                  <p className="text-gray-600">Our solutions are available worldwide, helping healthcare providers across different regions.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle2 className="text-varsal-lightblue mr-3 h-6 w-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Patient-Centered Approach</h3>
                  <p className="text-gray-600">We design our solutions with patients' needs and comfort as our primary focus.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <div className="bg-varsal-light p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-varsal-darkblue mb-3 text-center">Recent Updates</h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-gray-200">
                  <span className="block text-sm text-varsal-blue font-medium">April 15, 2025</span>
                  <a href="#" className="text-gray-800 hover:text-varsal-darkblue font-medium">
                    Varsal Healthcare Launches Revolutionary New Diagnostic Tool
                  </a>
                </li>
                <li className="pb-4 border-b border-gray-200">
                  <span className="block text-sm text-varsal-blue font-medium">March 28, 2025</span>
                  <a href="#" className="text-gray-800 hover:text-varsal-darkblue font-medium">
                    Annual Shareholder Meeting Announced for May 2025
                  </a>
                </li>
                <li className="pb-4 border-b border-gray-200">
                  <span className="block text-sm text-varsal-blue font-medium">February 12, 2025</span>
                  <a href="#" className="text-gray-800 hover:text-varsal-darkblue font-medium">
                    Varsal Healthcare Expands Operations to Southeast Asia
                  </a>
                </li>
                <li>
                  <span className="block text-sm text-varsal-blue font-medium">January 5, 2025</span>
                  <a href="#" className="text-gray-800 hover:text-varsal-darkblue font-medium">
                    Q4 Financial Results Show 15% Growth in Medical Device Sector
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <a href="#" className="inline-block px-6 py-3 bg-varsal-darkblue text-white rounded-lg hover:bg-varsal-blue transition-colors">
                View All Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
