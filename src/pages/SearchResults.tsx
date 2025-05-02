import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/common/PageHeader";
import { Search } from "lucide-react";

// Sample search result type
type SearchResult = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate search API call
    const fetchSearchResults = async () => {
      setLoading(true);
      
      // Mock results for demonstration
      setTimeout(() => {
        const mockResults = query ? [
          // Products
          {
            id: "1",
            title: "Advanced Medical Solutions",
            description: "Learn about our innovative healthcare solutions and medical devices.",
            url: "/products",
            category: "Products"
          },
          // About
          {
            id: "2",
            title: "Research & Development",
            description: "Discover our commitment to innovation and research in healthcare.",
            url: "/about",
            category: "Company"
          },
          // Careers - include multiple job listings
          {
            id: "3",
            title: "Senior Research Scientist",
            description: "Lead research initiatives for developing innovative healthcare solutions and oversee clinical trials for new medical devices.",
            url: "/careers",
            category: "Careers"
          },
          {
            id: "4",
            title: "Medical Device Engineer",
            description: "Design and develop innovative medical devices with a focus on user experience and clinical efficacy.",
            url: "/careers",
            category: "Careers"
          },
          {
            id: "5",
            title: "Quality Assurance Specialist",
            description: "Ensure compliance with quality standards and regulatory requirements for all medical products.",
            url: "/careers",
            category: "Careers"
          },
          // Investors
          {
            id: "6",
            title: "Q2 2025 Earnings Call",
            description: "Discussion of second-quarter financial results and business outlook.",
            url: "/investors",
            category: "Investors"
          },
          {
            id: "7",
            title: "Financial Reports",
            description: "Access our quarterly and annual financial reports for investors.",
            url: "/investors",
            category: "Investors"
          },
          // News/Updates
          {
            id: "8",
            title: "Q4 Financial Results",
            description: "Q4 Financial Results Show 15% Growth in Medical Device Sector",
            url: "/investors",
            category: "News"
          }
        ].filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        ) : [];
        
        setResults(mockResults);
        setLoading(false);
      }, 500);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <PageHeader 
          title="Search Results" 
          description={`${results.length} results found for "${query}"`} 
          backgroundImage="/images/hero.jpg" // Change to an appropriate image from your assets
        />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Search input for refinement */}
              <div className="mb-10 relative">
                <form action="/search" method="get">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="q"
                    placeholder="Refine your search..."
                    className="w-full py-3 px-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    defaultValue={query}
                  />
                </form>
              </div>
              
              {/* Search results */}
              {loading ? (
                <div className="text-center py-10">
                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="mt-2 text-gray-600">Searching...</p>
                </div>
              ) : results.length > 0 ? (
                <div className="space-y-8">
                  {results.map(result => (
                    <div key={result.id} className="p-6 bg-white rounded-lg shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <a href={result.url} className="text-xl font-semibold text-blue-900 hover:text-blue-700">
                            {result.title}
                          </a>
                          <p className="text-gray-600 mt-2">{result.description}</p>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {result.category}
                        </span>
                      </div>
                      <div className="mt-4">
                        <a href={result.url} className="text-sm text-blue-600 hover:underline">
                          View more
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">
                    We couldn't find any matches for "{query}". Please try another search term.
                  </p>
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

export default SearchResults;

