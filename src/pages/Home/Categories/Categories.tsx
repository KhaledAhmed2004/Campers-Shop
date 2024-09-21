import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import category1 from "../../../assets/category/bagpacks.png";
import category2 from "../../../assets/category/campingFurniture.png";
import category3 from "../../../assets/category/footwear.png";
import category4 from "../../../assets/category/lighting.png";
import category5 from "../../../assets/category/safety.png";
import category6 from "../../../assets/category/tents.png";
const Categories = () => {
  return (
    <div className=" mb-16   px-3 md:px-10  lg:px-16    ">
      <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] primary-color">
          Categories
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            Browse Products With Category
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  mt-20   "
      >
        <SwiperSlide className=" mb-14 lg:ms-0 ms-20 ">
          {/* <div className="  mx-auto"> */}
          <div>
            <div className=" bg-base-300 border-[#03a298] border-dotted border-2   w-[200px] h-[200px] rounded-full  flex justify-center items-center">
              <div className=" bg-base-100 rounded-full ">
                <img
                  src={category1}
                  alt=""
                  className=" p-3 w-[180px] h-[180px]"
                />
              </div>

              {/* <h3 className="text-4xl uppercase text-center -mt-20 text-[#FFFFFF] ">
                Bag
              </h3> */}
            </div>

            <p className="text-xl  font-bold uppercase mt-5 ">
              Backpacks & Bags
            </p>
          </div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          {/* <div className="  mx-auto"> */}
          <div>
            <div className=" bg-base-300 border-[#03a298] border-dotted border-2   w-[200px] h-[200px] rounded-full  flex justify-center items-center">
              <div className=" bg-base-100 rounded-full ">
                <img
                  src={category3}
                  alt=""
                  className=" p-3 w-[180px] h-[180px]"
                />
              </div>
            </div>

            <p className="text-xl  ms-9  font-bold uppercase mt-5 ">Footwear</p>
          </div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          {/* <div className="  mx-auto"> */}
          <div>
            <div className=" bg-base-300 border-[#03a298] border-dotted border-2   w-[200px] h-[200px] rounded-full  flex justify-center items-center">
              <div className=" bg-base-100 rounded-full ">
                <img
                  src={category2}
                  alt=""
                  className=" p-3 w-[180px] h-[180px]"
                />
              </div>
            </div>

            <p className="text-xl  font-bold uppercase mt-5 ">Camp Furniture</p>
          </div>
          {/* </div> */}
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div>
            <div className=" bg-base-300 border-[#03a298] border-dotted border-2   w-[200px] h-[200px] rounded-full  flex justify-center items-center">
              <div className=" bg-base-100 rounded-full ">
                <img
                  src={category6}
                  alt=""
                  className=" p-3 w-[180px] h-[180px]"
                />
              </div>
            </div>

            <p className="text-xl  font-bold uppercase mt-5 ">
              Tents & Shelters
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div>
            <div className=" bg-base-300 border-[#03a298] border-dotted border-2   w-[200px] h-[200px] rounded-full  flex justify-center items-center">
              <div className=" bg-base-100 rounded-full ">
                <img
                  src={category5}
                  alt=""
                  className=" p-3 w-[180px] h-[180px]"
                />
              </div>
            </div>

            <p className="text-xl  ps-3  font-bold uppercase mt-5 ">
              Health & Safety
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" mb-14 ">
          <div>
            <div className=" bg-base-300 border-[#03a298] border-dotted border-2   w-[200px] h-[200px] rounded-full  flex justify-center items-center">
              <div className=" bg-base-100 rounded-full ">
                <img
                  src={category4}
                  alt=""
                  className=" p-3 w-[180px] h-[180px]"
                />
              </div>
            </div>

            <p className="text-xl  font-bold uppercase mt-5 ">
              Lighting & Navigation
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
