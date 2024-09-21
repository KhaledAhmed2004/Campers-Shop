import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/api/api";
import { TProduct } from "../../../types";
import { Rating } from "@smastrom/react-rating";

const RecommendedProducts = () => {
  const { data: products } = useGetProductsQuery({});

  return (
    <div className="mt-12 mb-28 px-3 md:px-10  lg:px-16  ">
      <div className=" side-text">
        <p className="font-semibold ms-2 lg:text-[22px] ">Explore Our</p>

        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            <span className="primary-color">Recommended</span> Products
          </h2>
          <Link to="/products" className="custom-outline-btn">
            View All
          </Link>
        </div>
      </div>

      {/* Products Card */}

      <div className="mt-16 card-grid gap-x-5 gap-y-7">
        {products?.data?.slice(0, 6).map((product: TProduct) => (
          <div
            key={product._id}
            className="card card-compact bg-base-200 max-w-96 lg:max-h-[350px]  mx-auto"
          >
            <div className="lg:w-[360px]  lg:h-[220px] flex justify-center items-center">
              <img
                src={product.image}
                alt="Product Picture"
                className=" w-full  h-[220px] "
              />
            </div>
            <div className=" my-4 mx-5">
              <h3 className="card-title">{product?.name}</h3>

              <div className="card-actions items-center justify-between  mt-2">
                <div>
                  {" "}
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={product.ratings}
                    readOnly
                  />
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
      </div>
    </div>
  );
};

export default RecommendedProducts;
