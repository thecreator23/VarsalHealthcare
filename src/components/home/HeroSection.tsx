
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-varsal-darkblue to-varsal-blue flex items-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center md:text-left md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Innovative Healthcare for a <span className="text-varsal-lightblue">Better Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            At Varsal Healthcare, we're dedicated to enhancing quality of life through breakthrough medical solutions and patient-centered care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button 
              className="bg-varsal-lightblue hover:bg-varsal-lightblue/90 text-white text-lg px-8 py-6"
              asChild
            >
              <Link to="/products">
                Explore Our Solutions
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
