import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";
import bg_image from '../Assets/Probanner/PHOTO-2025-05-04-14-41-59.jpg';
import gynoimg from "../Assets/Product/gyno.jpeg";
import orthoimg from "../Assets/Product/orthopedic.jpeg";
import surimg from "../Assets/Product/surgical.jpeg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Products = () => {
  // Track which product dialog is open
  const [openDialogProductId, setOpenDialogProductId] = useState<number | null>(null);
  
  // Function to open a specific product dialog
  const openProductDialog = (id: number) => {
    console.log(`Opening dialog for product ${id}`);
    setOpenDialogProductId(id);
  };
  
  // Function to close the currently open dialog
  const closeProductDialog = () => {
    console.log(`Closing dialog for product ${openDialogProductId}`);
    setOpenDialogProductId(null);
  };
  
  // Cleanup effect to reset dialog state when component unmounts
  useEffect(() => {
    return () => {
      // Cleanup function to reset dialog state when component unmounts
      setOpenDialogProductId(null);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: "Gynecology",
      category: "Diagnostic Equipment",
      description: "Advanced diagnostic tool for comprehensive health monitoring with real-time data analysis and cloud integration.",
      benefits: ["Accurate vital sign monitoring", "Early disease detection", "User-friendly interface", "Remote monitoring capabilities"],
      image: gynoimg,
      medicines: [
        { name: "Irofes-XT", link: "https://www.1mg.com/otc/irofes-xt-tablet-otc962108" },
        { name: "Ehuca-D3", link: "https://www.1mg.com/drugs/ehuca-d3-tablet-965125" },
        { name: "Efflux-D", link: "https://www.1mg.com/drugs/efflux-d-capsule-pr-964391" },
        { name: "Efflux 40", link: "https://www.1mg.com/drugs/efflux-40-tablet-962103" },
        { name: "Lycosal", link: "https://www.1mg.com/otc/lycosal-tablet-otc962436" },
        { name: "Itravar", link: "https://www.1mg.com/marketer/varsal-healthcare-pvt-ltd-90027?srsltid=AfmBOoqxUJd9tZk0RJNaojjBPga5CFLX-NId6I6BGzfTNlOQXPzhZwF8" },
        { name: "Q-Jest", link: "https://www.1mg.com/marketer/varsal-healthcare-pvt-ltd-90027?srsltid=AfmBOoqxUJd9tZk0RJNaojjBPga5CFLX-NId6I6BGzfTNlOQXPzhZwF8" },
      ]
    },
    {
      id: 2,
      name: "Orthopedic",
      category: "Patient Management",
      description: "Comprehensive patient management system for healthcare facilities, streamlining administrative processes and enhancing care delivery.",
      benefits: ["Efficient patient record management", "Appointment scheduling", "Medication tracking", "Seamless integration with existing systems"],
      image: orthoimg,
      medicines: [
        { name: "Ehuca-D3", link: "https://www.1mg.com/drugs/ehuca-d3-tablet-965125" },
        { name: "Efflux-D", link: "https://www.1mg.com/drugs/efflux-d-capsule-pr-964391" },
        { name: "Varace-SP", link: "https://www.1mg.com/drugs/varace-sp-tablet-962125" },
        { name: "Varace-P", link: "https://www.1mg.com/drugs/varace-p-tablet-962122" },
        { name: "Varfast-OD", link: "https://www.1mg.com/drugs/varfast-od-tablet-962132" },
        { name: "Vxrol", link: "https://www.1mg.com/drugs/vxrol-gel-962138" },
      ]
    },
    {
      id: 3,
      name: "NeuroCare Solutions",
      category: "Therapeutic Devices",
      description: "Advanced neurological care devices designed to aid in rehabilitation and management of neurological conditions.",
      benefits: ["Personalized therapy programs", "Progress tracking", "Non-invasive treatment options", "Clinically proven results"],
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80",
      medicines: [
        { name: "Varfast-OD", link: "https://www.1mg.com/drugs/varfast-od-tablet-962132" },
        { name: "Efflux-D", link: "https://www.1mg.com/drugs/efflux-d-capsule-pr-964391" },

      ]
    },
    {
      id: 4,
      name: "Surgical",
      category: "Telehealth",
      description: "Secure telehealth platform connecting patients with healthcare providers for virtual consultations and remote care management.",
      benefits: ["HIPAA-compliant video conferencing", "Electronic prescriptions", "Integrated health records", "Mobile accessibility"],
      image: surimg,
      medicines: [
        { name: "Irofes-XT", link: "https://www.1mg.com/otc/irofes-xt-tablet-otc962108" },
        { name: "Ziaprex 100", link: "https://www.1mg.com/drugs/ziaprex-100-tablet-964127" },
        { name: "Ziaprex-O", link: "https://www.1mg.com/drugs/ziaprex-o-tablet-964128" },
      ]
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Our Products" 
          subtitle="Discover Varsal Healthcare's innovative solutions for modern healthcare challenges"
          bgImage={bg_image}
        />
        
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
              <p className="text-lg text-gray-700">
                At Varsal Healthcare, we develop and manufacture a wide range of innovative healthcare products designed to meet the evolving needs of patients and healthcare professionals. Our solutions combine cutting-edge technology with user-friendly designs to improve healthcare outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300"
                  data-product-id={product.id}
                >
                  <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-varsal-blue font-medium">{product.category}</span>
                    <h3 className="text-lg sm:text-xl font-bold text-varsal-darkblue my-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    
                    <Dialog 
                      open={openDialogProductId === product.id} 
                      onOpenChange={(open) => {
                        if (open) {
                          openProductDialog(product.id);
                        } else {
                          closeProductDialog();
                        }
                      }}
                    >
                      <DialogTrigger asChild>
                        <button
                          className="mt-2 px-3 sm:px-4 py-2 bg-varsal-darkblue text-white rounded hover:bg-varsal-blue transition-colors duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
                          data-product-id={product.id}
                        >
                          Learn More
                          <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
                        </button>
                      </DialogTrigger>
                      <DialogContent className="w-[95vw] sm:max-w-[425px] md:max-w-[600px] transition-all duration-300">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold text-varsal-darkblue">{product.name} - Medicines</DialogTitle>
                          <DialogDescription className="text-sm text-gray-600 pt-2">
                            Available products in our {product.name} category
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-3 sm:mt-4">
                          <ul className="list-disc pl-5 text-gray-600 space-y-3">
                            {product.medicines.map((med, index) => (
                              <li key={index}>
                                <a
                                  href={med.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-varsal-blue hover:text-varsal-darkblue transition-colors duration-200 hover:underline flex items-center gap-2"
                                >
                                  {med.name}
                                  <span className="text-sm opacity-75">→</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operations Section */}
        <section id="operations" className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Our Operations</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-6">
                Varsal Healthcare operates state-of-the-art facilities across multiple countries, bringing together talented professionals from diverse backgrounds to create innovative healthcare solutions. Our operations span research and development, manufacturing, quality control, marketing, and distribution.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 my-8 sm:my-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Research & Development</h3>
                  <p className="text-gray-700">
                    Our R&D centers house multidisciplinary teams working on next-generation healthcare technologies. We invest heavily in innovation to stay at the cutting edge of medical advancements.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Manufacturing</h3>
                  <p className="text-gray-700">
                    Our manufacturing facilities adhere to the highest industry standards, ensuring that every product is made with precision, reliability, and safety in mind.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Quality Assurance</h3>
                  <p className="text-gray-700">
                    We maintain rigorous quality control processes throughout our operations, meeting and exceeding international regulatory requirements.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Global Distribution</h3>
                  <p className="text-gray-700">
                    Our efficient distribution network ensures that our healthcare solutions reach medical facilities and patients worldwide in a timely manner.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700">
                By integrating these operational aspects, we maintain a streamlined process from concept to delivery, ensuring that our healthcare solutions make a meaningful impact on healthcare providers and patients alike.
              </p>
            </div>
          </div>
        </section>
        
        {/* Quality Section */}
        <section id="quality" className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6 text-center">Our Quality Commitment</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-8 text-center">
                At Varsal Healthcare, quality isn't just a department—it's a culture that permeates every aspect of our operations. We adhere to the highest standards in healthcare product development and manufacturing.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Certifications & Compliance</h3>
                  <p className="text-gray-700 mb-4">
                    All our products meet or exceed international regulatory requirements, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>ISO 13485:2016 Medical Device Quality Management</li>
                    <li>FDA Approval (where applicable)</li>
                    <li>CE Marking for European Compliance</li>
                    <li>MDSAP (Medical Device Single Audit Program)</li>
                    <li>GDPR Compliance for Data Protection</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Our Quality Process</h3>
                  <p className="text-gray-700 mb-4">
                    Our comprehensive quality assurance process includes:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Rigorous raw material testing</li>
                    <li>In-process quality checks at every production stage</li>
                    <li>Final product validation and verification</li>
                    <li>Post-market surveillance and continuous improvement</li>
                    <li>Regular internal and external audits</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
