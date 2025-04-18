
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Building, Users, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Contact Us" 
          subtitle="Reach out to our team for inquiries, partnerships, or support" 
        />
        
        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold text-varsal-darkblue mb-6">Send Us a Message</h2>
                  
                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-100 rounded-lg p-6 flex items-center">
                      <CheckCircle className="text-green-500 mr-4" size={24} />
                      <div>
                        <h3 className="font-semibold text-green-800 mb-1">Thank You!</h3>
                        <p className="text-green-600">Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Your Name</Label>
                          <Input 
                            id="name" 
                            name="name" 
                            placeholder="Enter your name" 
                            required 
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input 
                          id="subject" 
                          name="subject" 
                          placeholder="How can we help you?" 
                          required 
                          value={formData.subject}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          name="message" 
                          placeholder="Please provide details about your inquiry..." 
                          required 
                          className="min-h-[120px]"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-varsal-darkblue hover:bg-varsal-blue"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
                
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-varsal-darkblue mb-6">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex">
                      <MapPin className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
                        <p className="text-gray-600">
                          123 Healthcare Avenue<br />
                          Boston, MA 02115<br />
                          United States
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          Main Office: +1 (555) 123-4567<br />
                          Customer Support: +1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Mail className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">
                          General Inquiries: info@varsalhealthcare.com<br />
                          Support: support@varsalhealthcare.com<br />
                          Careers: careers@varsalhealthcare.com
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="text-varsal-lightblue h-6 w-6 mt-1 mr-4" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Hours of Operation</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM EST<br />
                          Customer Support: 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="bg-varsal-light p-2 rounded-full hover:bg-varsal-lightblue/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-varsal-darkblue">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="#" className="bg-varsal-light p-2 rounded-full hover:bg-varsal-lightblue/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-varsal-darkblue">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a href="#" className="bg-varsal-light p-2 rounded-full hover:bg-varsal-lightblue/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-varsal-darkblue">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="#" className="bg-varsal-light p-2 rounded-full hover:bg-varsal-lightblue/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-varsal-darkblue">
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section (placeholder) */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gray-300 h-[400px] rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map Integration Would Go Here</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partner Section */}
        <section id="partner" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Partner With Us</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 mb-10">
                At Varsal Healthcare, we believe in the power of collaboration. We're always looking for strategic partnerships that can help us enhance our offerings and reach more patients worldwide.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-varsal-light p-3 rounded-full mr-4">
                      <Building className="h-6 w-6 text-varsal-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-varsal-darkblue mb-2">Business Partnerships</h3>
                      <p className="text-gray-600">
                        Interested in distribution, co-development, or strategic alliances? We're open to exploring mutually beneficial business relationships.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="bg-varsal-light p-3 rounded-full mr-4">
                      <Users className="h-6 w-6 text-varsal-darkblue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-varsal-darkblue mb-2">Research Collaborations</h3>
                      <p className="text-gray-600">
                        We partner with academic institutions, research organizations, and healthcare providers to advance medical innovation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-varsal-darkblue hover:bg-varsal-blue px-8 py-6 text-lg"
                onClick={() => {
                  document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Discuss Partnership Opportunities
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
