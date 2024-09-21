import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// images
import pic1 from "../../../assets/testimonialPictures/image1.png";
import pic2 from "../../../assets/testimonialPictures/image2.png";
import pic3 from "../../../assets/testimonialPictures/image3.png";
import pic4 from "../../../assets/testimonialPictures/image4.png";
import pic5 from "../../../assets/testimonialPictures/image5.png";
import pic6 from "../../../assets/testimonialPictures/image6.png";

const Testimonial = () => {
  return (
    <div className="mt-12 mb-28  px-3 md:px-10  lg:px-16  ">
      <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] primary-color">
          Customer Reviews
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            See Why Campers Choose Us
          </h2>
        </div>
      </div>

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
        className="mySwiper  mt-16    max-w-screen-lg "
      >
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[300px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic1}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#699994] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">
              Keya Moni
            </h3>
            <p className=" text-center my-2 mx-3  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              earum tempore cumque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[300px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic2}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#699994] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">
              Lorem Ipsum
            </h3>
            <p className=" text-center my-2 mx-3  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              earum tempore cumque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[300px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic3}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#699994] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">
              Urmy Banu
            </h3>
            <p className=" text-center my-2 mx-3  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              earum tempore cumque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[300px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic4}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#699994] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">Grover</h3>
            <p className=" text-center my-2 mx-3  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              earum tempore cumque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[300px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic5}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#699994] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">Jesmin</h3>
            <p className=" text-center my-2 mx-3  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              earum tempore cumque.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div className=" w-[300px] h-[300px] border-[2px] rounded-md  border-base-300 mx-auto">
            <img
              src={pic6}
              className=" w-[130px] h-[130px] bg-base-300 mx-auto mt-6 border-[2px] border-[#699994] rounded-full"
              alt=""
            />

            <h3 className="text-center mt-2 font-semibold text-xl">Azhar</h3>
            <p className=" text-center my-2 mx-3  ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              earum tempore cumque.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
