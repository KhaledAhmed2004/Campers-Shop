import "./HeroSection.css";
import Typewriter from "typewriter-effect";

import img1 from "../../../assets/Banner/banner1.png";
import img2 from "../../../assets/Banner/banner2.png";
import img3 from "../../../assets/Banner/banner3.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="px-6  md:px-10  lg:px-16    lg:mt-20 mb-20">
      <div className=" lg:flex lg:justify-between lg:gap-8 w-full ">
        {/* content */}
        <div className="lg:w-[55%] w-full lg:ms-3 mt-[9%]">
          <div className="    lg:text-center">
            <div className="">
              <h1 className="  text-[#1F1E1E] text-[16px] xl:text-[28px]   lg:text-[25px]  font-bold flex gap-2 mb-2   ">
                Embrace the Outdoors with
                <span className="primary-color  flex gap-2">
                  Campers
                  <Typewriter
                    options={{
                      strings: ["Shop!!!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>

              <div className="  text-justify lg:mt-5   text-sm lg:text-base">
                <p className=" ms-1 text-[#1F1E1E]">
                  Discover a wide range of essential and exciting camping gear
                  at Campers Shop. From durable tents and cozy sleeping bags to
                  portable stoves and fun outdoor gadgets, we have everything
                  you need for your next adventure. Gear up and make your
                  camping experience unforgettable! Your journey to the great
                  outdoors starts here.
                </p>
              </div>
              <div className="absolute mt-8 ms-2">
                <button className="custom-outline-btn ">Get Started</button>
                <Link to="/products">
                  <button className="custom-btn ms-5 "> Products</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className=" lg:w-[45%]  mt-28 lg:mt-0">
          <div className="flex gap-2">
            <div className="custom-background rounded-md w-[600px]  h-[220px]">
              <img src={img1} alt="" className="w-full h-full" />
            </div>
            <div className=" custom-background rounded-md w-[600px]  h-[220px]">
              <img src={img3} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="custom-background rounded-md h-[260px] mt-2 ">
            <img src={img2} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>

    // <div className="hero lg:h-[500px] lg:pb-0  pb-24 lg:pt-0 pt-16  xl:min-h-screen  ">
    //   <div className="hero-content xl:gap-28 flex-col lg:flex-row-reverse ">
    //     {/* <div className="mb-3 lg:mb-0  xl:me-16 side-pic"></div> */}
    //     <div className="w-[40%]">
    //       <div className="flex ">
    //         <div>
    //           <img src={img1} alt="" />
    //         </div>
    //         <div>
    //           <img src={img2} alt="" />
    //         </div>
    //       </div>
    //       <div>
    //         <img src={img3} alt="" />
    //       </div>
    //     </div>

    // <div className=" xl:ms-12  xl:mb-16 text-center">
    //   <div className="xl:max-w-[800px] lg:max-w-[500px] xl:ms-4 lg:ms-2">
    //     <h1 className="  text-[#1F1E1E] text-[18px]   lg:text-xl  font-bold xl:text-3xl lg:flex lg:gap-2 mb-2   ">
    //       Embrace the Outdoors with
    //       <span className="primary-color lg:ms-0 ms-20 flex gap-2">
    //         Campers
    //         <Typewriter
    //           options={{
    //             strings: ["Shop!!!"],
    //             autoStart: true,
    //             loop: true,
    //           }}
    //         />
    //       </span>
    //     </h1>

    //     <div className="  text-justify lg:mt-5   text-sm xl:text-md">
    //       <p className=" ms-1 text-[#1F1E1E]">
    //         Discover a wide range of essential and exciting camping gear at
    //         Campers Shop. From durable tents and cozy sleeping bags to
    //         portable stoves and fun outdoor gadgets, we have everything you
    //         need for your next adventure. Gear up and make your camping
    //         experience unforgettable! Your journey to the great outdoors
    //         starts here.
    //       </p>
    //     </div>
    //     <div className="absolute mt-5 ms-2">
    //       <button className="custom-outline-btn ">Get Started</button>
    //       <button className="custom-btn ms-5 "> Products</button>
    //     </div>
    //   </div>
    // </div>
    //   </div>
    // </div>
  );
};

export default HeroSection;
