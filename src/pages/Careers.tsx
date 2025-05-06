import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, Upload, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        {/* Header with Background Image */}
        <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden bg-blue-800">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/careers-banner.jpg" 
              alt="Healthcare professionals working together"
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Careers at Varsal Healthcare</h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">Join our team and make a difference in global healthcare</p>
          </div>
        </div>
        
        {/* Why Choose Varsal Healthcare Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6 text-center">Why Choose Varsal Healthcare</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 mb-8 text-center">
                At Varsal Healthcare, we combine cutting-edge technology with compassionate care to deliver healthcare solutions that truly make a difference in patients' lives.
              </p>
              
              <div className="space-y-6 mt-12">
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
          </div>
        </section>
        
        {/* Company Culture Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Why Work With Us</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-8"></div>
              <p className="text-lg text-gray-700">
                At Varsal Healthcare, we're more than just a company—we're a community of passionate professionals dedicated to transforming healthcare through innovation and compassion. When you join our team, you become part of a mission to enhance the quality of life for people around the world.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-varsal-darkblue">Innovation</h3>
                <p className="text-gray-600">
                  We foster a culture of creativity and forward thinking, encouraging our team members to explore new ideas and solutions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-varsal-darkblue">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of teamwork, bringing together diverse talents and perspectives to achieve common goals.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-varsal-light flex items-center justify-center rounded-full mb-6 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-varsal-darkblue">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-varsal-darkblue">Impact</h3>
                <p className="text-gray-600">
                  Every role at Varsal contributes to our mission of improving healthcare and enhancing quality of life for patients worldwide.
                </p>
              </div>
            </div>
            
            <div className="bg-varsal-light p-8 rounded-lg">
              <h3 className="text-xl font-bold text-varsal-darkblue mb-4 text-center">Benefits & Perks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">Competitive compensation and performance bonuses</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">Comprehensive health, dental, and vision insurance</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">401(k) retirement plan with company match</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">Generous paid time off and holidays</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">Professional development opportunities</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">Flexible work arrangements</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">Employee wellness programs</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-varsal-darkblue rounded-full mr-3"></div>
                    <p className="text-gray-700">Collaborative and inclusive work environment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA Section */}
        <section className="py-16 bg-varsal-darkblue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Joining Our Team?</h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to help us advance our mission of improving global healthcare. Get in touch with our HR team to learn about current opportunities.
            </p>
            <Button className="bg-varsal-lightblue hover:bg-varsal-blue text-white px-8 py-6 text-lg">
              Contact Our HR Team
            </Button>
          </div>
        </section>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default Careers;
