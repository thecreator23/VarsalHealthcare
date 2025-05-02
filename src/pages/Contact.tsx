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
        {/* Blue header banner */}
        <div className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          </div>
        </div>
        
        {/* Contact Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Contact Information - LEFT SIDE */}
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
                          Main Office: +91 73402 16329<br />
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
                          Monday - Saturday: 9:00 AM - 5:00 PM IST<br />
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
                
                {/* Contact Form - RIGHT SIDE */}
                <div id="contact-form">
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
                        className="w-full bg-blue-800 hover:bg-blue-700"
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
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
