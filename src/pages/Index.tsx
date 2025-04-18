
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import HighlightsSection from "@/components/home/HighlightsSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <HeroSection />
        <IntroSection />
        <HighlightsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
