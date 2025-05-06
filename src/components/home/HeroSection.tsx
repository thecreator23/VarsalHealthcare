import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import HomepicImage from "../../Assets/Homepic/doc.png";

const HeroSection = () => {
  return (
    <div 
      className="relative min-h-[93vh] bg-cover bg-center flex items-center" 
      style={{ backgroundImage: `url(${HomepicImage})` }}
    >
      <div className="absolute inset-0 bg-varsal-darkblue/70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center md:text-left md:max-w-2xl lg:max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Innovative Healthcare for a <span className="text-varsal-lightblue">Better Tomorrow</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            At Varsal Healthcare, we're dedicated to enhancing quality of life through breakthrough medical solutions and patient-centered care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
