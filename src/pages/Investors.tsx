
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, Download } from "lucide-react";
import placeholder from "../Assets/Logo/placeholder.jpg"; 
// import investorimg from "../Assets/Images/investor.jpeg";
const founderImage1 = "https://i.postimg.cc/VkGy8CVg/foundercopy.png";
const founderImage2 = "https://i.postimg.cc/nrbbWfPt/founder2.jpg";

const Investors = () => {
  // Sample financial data for chart
  const financialData = [
    { year: '2020', revenue: 35, profit: 12 },
    { year: '2021', revenue: 42, profit: 15 },
    { year: '2022', revenue: 48, profit: 18 },
    { year: '2023', revenue: 56, profit: 22 },
    { year: '2024', revenue: 68, profit: 28 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16 bg-varsal-darkblue">
        <PageHeader 
          title="Investor Relations" 
          subtitle="Financial information, shareholder details, and annual reports"
        />
        
        {/* Shareholder Info Section */}
        <section id="shareholders" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Meet Our Founders</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
              <div className="flex flex-col gap-10 items-center justify-between mb-8">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mx-auto mb-4">
                  <img 
                     src={founderImage2}
                    width={400}
                    alt="Founder 1" 
                    className="w-full md:w-[400px] h-auto md:mr-6 mb-4 md:mb-0 shadow-lg rounded-lg"
                  />
                  <div className="text-lg text-gray-700 md:flex-1 p-4">
                    <span className="font-bold">Mr. Sandip Gangopadhyay </span>
                    Mr. Sandip Gangopadhyay is a visionary founder pharmaceutical leader with deep expertise in operations, business development, and global markets. As a founder, he brings strategic vision and a strong focus on innovation, sustainability, and ethical growth.
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mx-auto mb-4">
                <div className="text-lg text-gray-700 md:flex-1 p-4">
                  As the visionary founder,<span className="font-bold"> Mr. Ajay Singh </span> is deeply committed to embracing innovation and driving the organization toward cutting-edge advancements in research and technology. With a focus on developing new therapies and nurturing talent, he fosters a forward-thinking culture that continuously seeks to improve lives through scientific progress and creative solutions.
                  </div>
                  <img 
                   src={founderImage1}
                    width={400}
                    alt="Founder 1" 
                    className="w-full md:w-[400px] h-auto md:mr-6 mb-4 md:mb-0 shadow-lg rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div> 
                <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mx-auto mb-4">
                  <img 
                    src={placeholder}
                    width={400}
                    alt="Founder 1" 
                    className="w-full md:w-[400px] h-auto md:mr-6 mb-4 md:mb-0 shadow-lg rounded-lg"
                  />
                  <div className="text-lg text-gray-700 md:flex-1 p-4">
                    As the co-founder, <span className="font-bold">Mrs. Rajni Singh </span>  plays a key role in upholding the organization's ethical and social responsibilities. She ensures adherence to the highest standards while promoting sustainability, corporate citizenship, and global impact. Through a shared dedication to expanding access and leadership, Rajni Singh supports a mission that extends beyond business—to creating a positive, lasting difference worldwide.
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

export default Investors;
