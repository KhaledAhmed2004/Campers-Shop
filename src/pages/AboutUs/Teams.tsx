import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import pic1 from "../../assets/Teams/member1.png";
import pic2 from "../../assets/Teams/member2.png";
import pic3 from "../../assets/Teams/member3.png";
import pic4 from "../../assets/Teams/member4.png";

const Teams = () => {
  return (
    <div className="lg:flex lg:gap-5  lg:justify-between mt-5">
      <div className="lg:max-w-[40%] w-full mt-10 lg:mt-28">
        <div className=" side-text">
          <p className="font-semibold ms-2 lg:text-[22px] ">
            Our Key Team Members
          </p>

          <p className="w-full text-justify ms-2 mt-1">
            Behind Campers Shop is a team of outdoor enthusiasts with a shared
            love for nature and adventure. Led by Keya Moni, our Founder & CEO,
            we bring together experts in product development, marketing, and
            customer service, all driven by a commitment to quality and
            innovation. Each member of our team is passionate about camping and
            dedicated to providing you with the best products and support to
            make your outdoor experiences unforgettable.
          </p>
        </div>
      </div>
      <div className="lg:max-w-[60%] w-full lg:mt-0 mt-64 ">
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className="mySwiper  mt-16   "
        >
          <SwiperSlide className=" mb-14 ">
            <div className="p-3 w-[300px] lg:w-[220px] h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto ">
              <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
                <img
                  src={pic1}
                  alt=""
                  className="bg-base-300 w-[100px] h-[80px] rounded-full"
                />
              </div>
              <h3 className=" text-xl uppercase text-center  ">Keya Moni</h3>
              <span className="text-md  ms-20 lg:ms-11">Founder & CEO</span>
              <p>
                <p className="text-justify text-[15px]  mt-1">
                  Keya Moni is an avid camper with over 20 years of experience
                  in the outdoor industry. Her passion for camping and adventure
                  inspired him to create this type of plateform
                </p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" mb-14 ">
            <div className="p-3  w-[300px] lg:w-[220px] h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto ">
              <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
                <img
                  src={pic2}
                  alt=""
                  className="bg-base-300 w-[100px] h-[80px] rounded-full"
                />
              </div>
              <h3 className=" text-xl uppercase text-center   ">Jhon Doe</h3>
              <span className=" text-[15px]   ms-20  lg:ms-11">
                {" "}
                Marketing Officer
              </span>
              <p>
                <p className="text-justify text-[15px] mt-1">
                  Jhon brings her creative expertise and marketing acumen to
                  Campers Shop, ensuring that our brand resonates with outdoor
                  lovers everywhere .He leads our efforts to connect with
                  customers.
                </p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" mb-14 ">
            <div className="p-3  w-[300px] lg:w-[220px] h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto ">
              <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
                <img
                  src={pic3}
                  alt=""
                  className="bg-base-300 w-[100px] h-[80px] rounded-full"
                />
              </div>
              <h3 className=" text-xl uppercase text-center   ">Mike Brown</h3>
              <span className=" text-[15px]   ms-20 lg:ms-9">
                {" "}
                Product Development
              </span>
              <p>
                <p className="text-justify text-[15px] mt-1">
                  Mike is an outdoor gear expert with a deep understanding of
                  what makes a camping trip successful.Mike's hands-on
                  experience in the field helps us choose the best gear for our
                  customers.
                </p>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" mb-14 ">
            <div className="p-3  w-[300px] lg:w-[220px] h-[320px] shadow-lg  rounded-lg  border-base-300 mx-auto ">
              <div className="border-[2px] border-[#2d4240]  w-[100px] mx-auto  rounded-full p-1">
                <img
                  src={pic4}
                  alt=""
                  className="bg-base-300 w-[100px] h-[80px] rounded-full"
                />
              </div>
              <h3 className=" text-xl uppercase text-center   ">Robert King</h3>
              <span className=" text-[15px]  ms-20  lg:ms-11">
                {" "}
                Operations Officer
              </span>
              <p>
                <p className="text-justify text-[15px] mt-1">
                  With his extensive background in supply chain management and a
                  passion for efficient processes, Robert plays a key role in
                  making sure our products reach customers quickly and reliably.
                </p>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Teams;
