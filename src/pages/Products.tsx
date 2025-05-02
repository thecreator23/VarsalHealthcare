
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";

const Products = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "VitalScan Pro",
      category: "Diagnostic Equipment",
      description: "Advanced diagnostic tool for comprehensive health monitoring with real-time data analysis and cloud integration.",
      benefits: ["Accurate vital sign monitoring", "Early disease detection", "User-friendly interface", "Remote monitoring capabilities"],
      image: "https://images.unsplash.com/photo-1581093458791-9d64593e7ad4?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "MediTrack System",
      category: "Patient Management",
      description: "Comprehensive patient management system for healthcare facilities, streamlining administrative processes and enhancing care delivery.",
      benefits: ["Efficient patient record management", "Appointment scheduling", "Medication tracking", "Seamless integration with existing systems"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "NeuroCare Solutions",
      category: "Therapeutic Devices",
      description: "Advanced neurological care devices designed to aid in rehabilitation and management of neurological conditions.",
      benefits: ["Personalized therapy programs", "Progress tracking", "Non-invasive treatment options", "Clinically proven results"],
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?auto=format&fit=crop&q=80"
    },
    {
      id: 4,
      name: "CareConnect Platform",
      category: "Telehealth",
      description: "Secure telehealth platform connecting patients with healthcare providers for virtual consultations and remote care management.",
      benefits: ["HIPAA-compliant video conferencing", "Electronic prescriptions", "Integrated health records", "Mobile accessibility"],
      image: "https://images.unsplash.com/photo-1581093196277-9f6070549f10?auto=format&fit=crop&q=80"
    },
    {
      id: 5,
      name: "MobiCare Devices",
      category: "Mobile Medical Equipment",
      description: "Portable medical equipment for emergency response and field operations, ensuring quality care in any setting.",
      benefits: ["Lightweight and durable", "Battery-operated", "Easy to transport", "Rapid deployment"],
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80"
    },
    {
      id: 6,
      name: "BioPharma Solutions",
      category: "Pharmaceuticals",
      description: "Innovative pharmaceutical products targeting specific health conditions with minimal side effects and optimal efficacy.",
      benefits: ["Research-backed formulations", "Improved patient outcomes", "Reduced side effects", "Cost-effective treatment options"],
      image: "https://images.unsplash.com/photo-1585435557343-3b348b7b8bc4?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Our Products" 
          subtitle="Discover Varsal Healthcare's innovative solutions for modern healthcare challenges" 
        />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700">
                At Varsal Healthcare, we develop and manufacture a wide range of innovative healthcare products designed to meet the evolving needs of patients and healthcare professionals. Our solutions combine cutting-edge technology with user-friendly designs to improve healthcare outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-varsal-blue font-medium">{product.category}</span>
                    <h3 className="text-xl font-bold text-varsal-darkblue my-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                    <ul className="list-disc pl-5 text-gray-600 mb-4">
                      {product.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                    <button className="mt-2 px-4 py-2 bg-varsal-darkblue text-white rounded hover:bg-varsal-blue transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operations Section */}
        <section id="operations" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Our Operations</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-6">
                Varsal Healthcare operates state-of-the-art facilities across multiple countries, bringing together talented professionals from diverse backgrounds to create innovative healthcare solutions. Our operations span research and development, manufacturing, quality control, marketing, and distribution.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
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
        <section id="quality" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6 text-center">Our Quality Commitment</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-8 text-center">
                At Varsal Healthcare, quality isn't just a department—it's a culture that permeates every aspect of our operations. We adhere to the highest standards in healthcare product development and manufacturing.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
