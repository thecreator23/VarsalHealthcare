import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";
import IndiaImage from "../Assets/Mission/india-j97a3613-1440x536.jpg";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section with background image - Matching the screenshot */}
        <div 
          className="relative min-h-[100vh] bg-cover bg-center flex items-center" 
          style={{ backgroundImage: `url(${IndiaImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="md:max-w-xl lg:max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">
                Our Vision
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                At Varsal Healthcare, our vision is to revolutionize healthcare through innovation, accessibility, and patient-centered approaches. We aim to create a healthier global community by providing cutting-edge medical solutions that enhance the quality of life for patients worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We envision a world where advanced healthcare is accessible to all, where patients receive personalized care, and where medical professionals have the tools they need to provide the best possible treatment. Our commitment to research and development ensures that we remain at the forefront of healthcare innovation.
              </p>
              <p className="text-lg text-gray-700">
                Through strategic partnerships, continuous learning, and a dedication to excellence, we strive to be the global leader in healthcare solutions, setting new standards for the industry and inspiring positive change in healthcare delivery systems around the world.
              </p>
            </div>
          </div>
        </div>

        
        {/* Values Section */}
        <section id="values" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-varsal-darkblue mb-6 text-center">Our Core Values</h2>
            <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First row - 3 cards */}
              <div className="bg-white p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Integrity</h3>
                <p className="text-gray-600 text-center">
                  We uphold the highest ethical standards in all our operations, ensuring transparency, honesty, and accountability in everything we do.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Innovation</h3>
                <p className="text-gray-600 text-center">
                  We constantly push the boundaries of what's possible in healthcare, investing in research and development to create groundbreaking solutions.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Quality</h3>
                <p className="text-gray-600 text-center">
                  We are committed to delivering products and services of the highest quality, ensuring safety and efficacy for all our customers.
                </p>
              </div>
              
              {/* Second row - 2 cards centered */}
              <div className="bg-white p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300 md:col-start-1 md:col-end-2">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Compassion</h3>
                <p className="text-gray-600 text-center">
                  We approach healthcare with empathy, understanding that behind every product is a patient whose life we aim to improve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm transition-transform hover:-translate-y-1 duration-300 md:col-start-2 md:col-end-3">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-varsal-darkblue">Excellence</h3>
                <p className="text-gray-600 text-center">
                  We strive for the highest standards in everything we do, from product development to customer service and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
