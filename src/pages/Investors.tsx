
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, Download } from "lucide-react";

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
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Investor Relations" 
          subtitle="Financial information, shareholder details, and annual reports" 
        />
        
        {/* Shareholder Info Section */}
        <section id="shareholders" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Shareholder Information</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-8">
                Varsal Healthcare is committed to creating long-term value for our shareholders through ethical business practices, strategic growth initiatives, and transparent communication. We believe in maintaining open dialogues with our investors and providing regular updates on our performance and future outlook.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Stock Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Stock Exchange</span>
                      <span className="text-gray-900 font-medium">NYSE</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Symbol</span>
                      <span className="text-gray-900 font-medium">VSL</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">52-Week Range</span>
                      <span className="text-gray-900 font-medium">$45.30 - $78.25</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Market Cap</span>
                      <span className="text-gray-900 font-medium">$4.2 Billion</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dividend Yield</span>
                      <span className="text-gray-900 font-medium">1.8%</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Ownership Structure</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Institutional Investors</span>
                      <span className="text-gray-900 font-medium">62%</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Individual Investors</span>
                      <span className="text-gray-900 font-medium">24%</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-gray-600">Employee Ownership</span>
                      <span className="text-gray-900 font-medium">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Founders & Executives</span>
                      <span className="text-gray-900 font-medium">6%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-varsal-darkblue mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Q2 2025 Earnings Call</h4>
                        <p className="text-gray-600">Discussion of second-quarter financial results and business outlook.</p>
                      </div>
                      <div className="text-right">
                        <span className="text-varsal-blue font-medium">July 25, 2025</span>
                        <p className="text-gray-600">10:00 AM EST</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Annual Shareholder Meeting</h4>
                        <p className="text-gray-600">Annual gathering of shareholders to discuss company performance and vote on proposals.</p>
                      </div>
                      <div className="text-right">
                        <span className="text-varsal-blue font-medium">May 12, 2025</span>
                        <p className="text-gray-600">9:00 AM EST</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Financials Section */}
        <section id="financials" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Financial Performance</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-12">
                Varsal Healthcare has demonstrated consistent financial growth over the years, driven by our commitment to innovation, strategic market expansion, and operational excellence. Below is an overview of our financial performance.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
                <h3 className="text-xl font-semibold text-varsal-darkblue mb-6 text-center">Revenue & Profit Growth (Million USD)</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={financialData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#0033A0" name="Revenue" />
                      <Bar dataKey="profit" fill="#00ADEF" name="Profit" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h4 className="text-gray-600 mb-2">2024 Revenue</h4>
                  <p className="text-3xl font-bold text-varsal-darkblue">$68M</p>
                  <p className="text-varsal-blue">↑ 21.4% YoY</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h4 className="text-gray-600 mb-2">2024 Net Profit</h4>
                  <p className="text-3xl font-bold text-varsal-darkblue">$28M</p>
                  <p className="text-varsal-blue">↑ 27.3% YoY</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h4 className="text-gray-600 mb-2">R&D Investment</h4>
                  <p className="text-3xl font-bold text-varsal-darkblue">$12M</p>
                  <p className="text-varsal-blue">17.6% of Revenue</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700">
                For detailed financial information, please refer to our quarterly and annual reports available in the Annual Reports section below.
              </p>
            </div>
          </div>
        </section>
        
        {/* Annual Report Section */}
        <section id="annual-report" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Annual Reports</h2>
              <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
              
              <p className="text-lg text-gray-700 mb-12">
                Our annual reports provide comprehensive information about Varsal Healthcare's financial performance, strategic initiatives, governance practices, and future outlook. Download our reports below for in-depth insights into our company.
              </p>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-varsal-light p-4 rounded-lg mr-4">
                      <FileText size={32} className="text-varsal-darkblue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">2024 Annual Report</h3>
                      <p className="text-gray-600">PDF • 8.2 MB • Published April 12, 2025</p>
                    </div>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-varsal-darkblue text-white rounded-lg hover:bg-varsal-blue transition-colors">
                    <Download size={18} className="mr-2" /> Download
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-varsal-light p-4 rounded-lg mr-4">
                      <FileText size={32} className="text-varsal-darkblue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">2023 Annual Report</h3>
                      <p className="text-gray-600">PDF • 7.8 MB • Published April 15, 2024</p>
                    </div>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-varsal-darkblue text-white rounded-lg hover:bg-varsal-blue transition-colors">
                    <Download size={18} className="mr-2" /> Download
                  </button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-varsal-light p-4 rounded-lg mr-4">
                      <FileText size={32} className="text-varsal-darkblue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">2022 Annual Report</h3>
                      <p className="text-gray-600">PDF • 7.5 MB • Published April 10, 2023</p>
                    </div>
                  </div>
                  <button className="flex items-center px-4 py-2 bg-varsal-darkblue text-white rounded-lg hover:bg-varsal-blue transition-colors">
                    <Download size={18} className="mr-2" /> Download
                  </button>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-700 mb-4">Need older reports or additional financial information?</p>
                <a href="/contact" className="text-varsal-blue hover:text-varsal-darkblue underline font-medium">
                  Contact our Investor Relations team
                </a>
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
