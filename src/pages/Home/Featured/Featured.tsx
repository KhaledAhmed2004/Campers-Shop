import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { useFeaturedProductsQuery } from "../../../redux/api/api";
import { TProduct } from "../../../types";
const Featured = () => {
  const { data: products } = useFeaturedProductsQuery({});

  return (
    <div className="mt-12 mb-28  px-3 md:px-10  lg:px-16   ">
      <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] ">
          Featured <span className="primary-color"> Products</span>
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            Must-Have Camping Gear
          </h2>
        </div>
      </div>

      <div className="mt-10 card-grid  mx-5   gap-6">
        {products?.data?.map((product: TProduct) => (
          <div
            key={product._id}
            className="card card-compact max-96 bg-base-100 rounded-[2px] mx-auto"
          >
            <div className=" w-[360px] bg-base-300 rounded-md  h-[220px] flex justify-center items-center">
              <img
                src={product.image}
                alt="Product Picture"
                className=" w-full h-full "
              />
            </div>
            <div className=" my-4 mx-5">
              <h3 className="card-title">{product?.name}</h3>

              <h4 className=" text-lg mt-3 ">
                Price: <span className="font-semibold">${product?.price}</span>
              </h4>
              <h4 className=" text-lg mt-3 ">
                Category:{" "}
                <span className="font-semibold">{product?.category}</span>
              </h4>

              <div className="card-actions items-center justify-between mt-6">
                <div className="flex gap-2  items-center  justify-center">
                  {" "}
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={product?.ratings}
                    readOnly
                  />
                  <span className="text-lg font-semibold mt-[2px] ">
                    {product?.ratings} <span>/5</span>
                  </span>
                </div>
                <Link
                  to={`/products/${product._id}`}
                  className="custom-outline-btn flex   items-center justify-center"
                >
                  Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-[18px] ms-[5px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className=" h-[50%] "
            />
          </figure>
          <div className=" my-4 mx-5">
            <h3 className="card-title">Shoes!</h3>
            <h4 className=" text-lg mt-3 ">
              Price: <span className="font-semibold">$40</span>
            </h4>

            <div className="card-actions items-center justify-between mt-2">
              <div>
                {" "}
                <Rating style={{ maxWidth: 120 }} value={3} />
              </div>
              <Link className="custom-outline-btn flex   items-center justify-center">
                Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[18px] ms-[5px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Featured;
