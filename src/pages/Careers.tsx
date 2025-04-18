
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

const Careers = () => {
  // Sample job listings
  const allJobs = [
    {
      id: 1,
      title: "Senior Research Scientist",
      department: "Research & Development",
      location: "Boston, MA",
      type: "Full-time",
      description: "Lead research initiatives for developing innovative healthcare solutions and oversee clinical trials for new medical devices.",
      requirements: [
        "Ph.D. in Biomedical Engineering, Medical Sciences, or related field",
        "5+ years of experience in medical device research",
        "Strong publication record in peer-reviewed journals",
        "Experience with regulatory compliance and clinical trials"
      ]
    },
    {
      id: 2,
      title: "Medical Device Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Design and develop innovative medical devices with a focus on user experience and clinical efficacy.",
      requirements: [
        "Bachelor's or Master's degree in Biomedical Engineering or related field",
        "3+ years of experience in medical device development",
        "Familiarity with FDA regulatory requirements",
        "Experience with CAD software and prototyping"
      ]
    },
    {
      id: 3,
      title: "Quality Assurance Specialist",
      department: "Quality Control",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Ensure compliance with quality standards and regulatory requirements for all medical products and processes.",
      requirements: [
        "Bachelor's degree in a scientific or engineering discipline",
        "4+ years in quality assurance within a medical device or pharmaceutical company",
        "Knowledge of ISO 13485, FDA QSR, and other relevant standards",
        "Experience with quality management systems and auditing"
      ]
    },
    {
      id: 4,
      title: "Clinical Data Analyst",
      department: "Clinical Affairs",
      location: "Remote",
      type: "Full-time",
      description: "Analyze clinical data from trials and post-market surveillance to support product development and regulatory submissions.",
      requirements: [
        "Bachelor's degree in Biostatistics, Epidemiology, or related field",
        "3+ years experience in clinical data analysis",
        "Proficiency in statistical analysis software (R, SAS, or similar)",
        "Experience with electronic data capture systems"
      ]
    },
    {
      id: 5,
      title: "Marketing Specialist - Healthcare",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      description: "Develop and implement marketing strategies for healthcare products targeting medical professionals and healthcare facilities.",
      requirements: [
        "Bachelor's degree in Marketing, Business, or related field",
        "2+ years of marketing experience in healthcare or medical devices",
        "Strong understanding of digital marketing platforms",
        "Excellent communication and creative skills"
      ]
    },
    {
      id: 6,
      title: "Regulatory Affairs Associate",
      department: "Regulatory",
      location: "Minneapolis, MN",
      type: "Full-time",
      description: "Support regulatory submissions and maintain compliance with global healthcare regulations for medical devices and solutions.",
      requirements: [
        "Bachelor's degree in Life Sciences, Engineering, or related field",
        "2+ years of experience in regulatory affairs for medical devices",
        "Knowledge of FDA, EU MDR, and international regulatory requirements",
        "Strong attention to detail and documentation skills"
      ]
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(allJobs[0]);
  
  // Filter jobs based on search term
  const filteredJobs = allJobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Careers at Varsal Healthcare" 
          subtitle="Join our team and make a difference in global healthcare" 
        />
        
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
        
        {/* Job Listings Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-varsal-darkblue mb-6 text-center">Open Positions</h2>
            <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-12"></div>
            
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-8 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search by job title, department, or location..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Job Listings */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Job List */}
                <div className="lg:col-span-1 space-y-4">
                  {filteredJobs.length > 0 ? (
                    filteredJobs.map(job => (
                      <div 
                        key={job.id}
                        className={`p-4 rounded-lg cursor-pointer transition-all duration-200 ${selectedJob.id === job.id ? 'bg-varsal-light border-l-4 border-varsal-darkblue' : 'bg-white hover:bg-gray-50'}`}
                        onClick={() => setSelectedJob(job)}
                      >
                        <h3 className="font-semibold text-gray-900">{job.title}</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-2">
                          <Briefcase size={16} className="mr-2" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin size={16} className="mr-2" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="bg-white p-6 rounded-lg text-center">
                      <p className="text-gray-600">No jobs match your search criteria.</p>
                    </div>
                  )}
                </div>
                
                {/* Job Details */}
                <div className="lg:col-span-2">
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold text-varsal-darkblue mb-2">{selectedJob.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Briefcase size={18} className="mr-2" />
                        <span>{selectedJob.department}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-2" />
                        <span>{selectedJob.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <span className="px-2 py-1 bg-varsal-light text-varsal-darkblue text-sm rounded-md">{selectedJob.type}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-2">Job Description</h4>
                      <p className="text-gray-700">{selectedJob.description}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-2">Requirements</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-varsal-darkblue hover:bg-varsal-blue">
                        Apply Now
                      </Button>
                      <Button variant="outline" className="border-varsal-darkblue text-varsal-darkblue hover:bg-varsal-light">
                        <Upload size={16} className="mr-2" /> Upload Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              {filteredJobs.length === 0 && (
                <div className="text-center mt-8">
                  <Button 
                    className="bg-varsal-darkblue hover:bg-varsal-blue"
                    onClick={() => setSearchTerm("")}
                  >
                    View All Positions
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
