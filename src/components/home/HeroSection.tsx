import campAnimation from "../../assets/animation/campAnimation.json";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const HeroSection = () => {
  return (
    <div className="mb-20">
      <div className="text-center lg:flex lg:justify-between lg:gap-8 w-full">
        {/* Content */}
        <div className="lg:w-[55%] w-full lg:ms-3 mt-14 lg:text-left text-center">
          <h1 className="text-[#1F1E1E] text-[24px] xl:text-[34px] lg:text-[28px] font-bold mb-4">
            Unleash Your Adventurous Spirit with
            <span className="text-orange-600"> Campers!</span>
          </h1>

          <div>
            <p className="text-justify mt-5 text-sm lg:text-base text-[#1F1E1E]">
              Ready for an adventure? Explore our top-notch camping gear that’s
              designed to elevate your outdoor experiences. Whether you're a
              seasoned explorer or a weekend warrior, we have everything from
              high-quality tents to must-have gadgets that make camping a
              breeze.
            </p>
            <p className="text-justify mt-2 text-sm lg:text-base text-[#1F1E1E]">
              Dive into nature with confidence—your unforgettable journey starts
              here!
            </p>
          </div>

          <div className="mt-8">
            <Link to="/products">
              <button className="bg-orange-600 p-2 rounded-lg px-4 text-lg text-white">
                See Our Products
              </button>
            </Link>
          </div>
        </div>

        {/* Animation */}
        <div className="lg:w-[45%] mt-10 lg:mt-0 flex items-center">
          <Lottie animationData={campAnimation} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
