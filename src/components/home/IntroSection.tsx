
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-varsal-darkblue">
            Welcome to Varsal Healthcare
          </h2>
          <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            With decades of experience and a commitment to innovation, we provide cutting-edge healthcare solutions that improve patient outcomes and enhance quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Our Vision</h3>
            <p className="text-gray-600 text-center mb-6">
              To revolutionize healthcare through innovation, accessibility, and patient-centered approaches, creating a healthier global community.
            </p>
            <div className="text-center">
              <Link to="/about#vision" className="inline-flex items-center text-varsal-blue hover:text-varsal-darkblue font-medium">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Our Products</h3>
            <p className="text-gray-600 text-center mb-6">
              Explore our comprehensive range of healthcare solutions designed to address various medical needs with cutting-edge technology.
            </p>
            <div className="text-center">
              <Link to="/products" className="inline-flex items-center text-varsal-blue hover:text-varsal-darkblue font-medium">
                View Products <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gray-50 p-8 rounded-lg transition-transform hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Our Values</h3>
            <p className="text-gray-600 text-center mb-6">
              Integrity, innovation, compassion, and excellence guide our approach to healthcare, ensuring we deliver the highest standards of care.
            </p>
            <div className="text-center">
              <Link to="/about#values" className="inline-flex items-center text-varsal-blue hover:text-varsal-darkblue font-medium">
                Discover More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
