import { Link } from "react-router-dom";

import "./About.css";

import Teams from "./Teams";
const AboutUs = () => {
  return (
    <div className="mt-14 mb-28 px-4 lg:px-20 min-h-screen   ">
      {/* Company Mission */}
      <div className="w-full lg:flex lg:justify-between lg:gap-10  bg-base-100 ">
        <div className="lg:w-[65%] ">
          <div className=" side-text">
            <p className="font-semibold ms-2 lg:text-[22px] ">About Us</p>

            <div className="flex justify-between mt-0 ">
              <h2 className="text-[15px] lg:text-2xl  ms-2  font-[500]  ">
                Our Ultimate Mission Is Top Quality
                <span className="ms-2 primary-color">Camping Gear</span>
              </h2>
            </div>
          </div>
          <p className="lg:text-lg text-justify   mt-2 ms-2">
            At Campers Shop, our mission is to inspire and equip outdoor
            enthusiasts by offering top-quality camping gear and exceptional
            customer service. We believe in promoting a sustainable and
            adventurous lifestyle, where everyone can explore nature with
            confidence and respect for the environment. Whether you're a
            seasoned camper or just starting out, our mission is to make your
            outdoor experiences more enjoyable and memorable by offering
            high-quality products that cater to all your camping needs. From
            tents and camping bags to footwears and gadgets, we've got you
            covered. Join us on the journey to explore nature and create
            unforgettable moments with the best camping gear available.
          </p>
          <div className="mt-8">
            <Link to="/products" className="custom-outline-btn ms-3">
              Explore Our Products
            </Link>
          </div>
        </div>
        <div className="lg:w-[35%] mt-3 ">
          <div className="mb-3 lg:mb-0 lg:mt-0 mt-10 side-pic2"></div>
        </div>
      </div>
      {/* Teams */}
      <div className=" divider mt-20 font-semibold text-xl ">Our Teams</div>
      <Teams></Teams>
      {/* Contact Information with map and social links*/}
      <div className=" divider mt-16 font-semibold text-xl  ">
        Contact Information
      </div>

      <div className="w-full lg:flex  lg:h-[450px] bg-base-100 shadow-md mt-16 ">
        <div className="w-full lg:w-[40%] ">
          <div className="custom-background w-full h-full rounded-s-md">
            <div className=" p-5">
              <h4 className="text-[28px] font-semibold ">
                Contact Information
              </h4>
              <p className=" ms-1">Get in Touch with Campers Shop!!!</p>

              <div className=" mt-[90px] ms-2 ">
                <div className="flex items-center gap-5 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="size-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    />
                  </svg>
                  <span className="text-lg font-semibold">+101 24242 423</span>
                </div>

                <div className="flex items-center gap-5 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="text-lg font-semibold">
                    keya05866@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-5 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.7}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <span className="text-lg font-semibold">
                    Kamrangir-Chor, Dhaka-Bangladesh
                  </span>
                </div>
              </div>

              <div className="mt-[90px] ms-3 flex  gap-5 items-center">
                <div>
                  <h4 className="text-lg font-semibold">Social Links :</h4>
                </div>
                <div className=" flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100036332574044"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                    </svg>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/keya-moni-43a437221/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* map */}
        <div className="w-full lg:w-[60%] lg:h-[450px]   h-[400px] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29223.438221592474!2d90.38069759999999!3d23.7142016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1724694845246!5m2!1sbn!2sbd"
            className="w-full h-full "
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
