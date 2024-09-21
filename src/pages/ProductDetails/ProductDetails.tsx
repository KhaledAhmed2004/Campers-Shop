import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../../redux/api/api";
import { Rating } from "@smastrom/react-rating";
import { useAppDispatch } from "../../redux/hook";
import { TProduct } from "../../types";
import { addToCart } from "../../redux/features/cartSlice";
import { useState } from "react";
import swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useProductDetailsQuery(id);
  const [count, setCount] = useState(1);

  const singleProduct = data?.data;

  const dispatch = useAppDispatch();
  const availableQuantity = singleProduct?.stockQuantity - count || 0;

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart({ product, quantity: count }));
    swal.fire({
      title: "Your Product Added Successfully",
      text: "Go to Cart Page For Place Order",
      icon: "success",

      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div className="my-[100px] px-4 lg:px-20  min-h-screen xl:min-h-0">
      <div className="w-full lg:flex lg:justify-between   lg:gap-8 ">
        <div className="lg:w-[46%] h-[300px] lg:h-[450px] bg-[#F0EEED] flex justify-center items-center  rounded-[20px]">
          <img
            src={singleProduct?.image}
            alt="Product Image"
            className="w-full h-full"
          />
        </div>
        <div className="lg:w-[50%] lg:mt-0 mt-10">
          <h4 className="mb-3 text-xl lg:text-[32px] font-black uppercase ">
            {singleProduct?.name}
          </h4>
          <div className="mb-3 flex gap-3  items-center  w-[220px] justify-center">
            {" "}
            <Rating
              style={{ maxWidth: 150 }}
              value={singleProduct?.ratings}
              readOnly
            />
            <span className="text-2xl  ">
              {singleProduct?.ratings} <span>/5</span>
            </span>
          </div>
          <h4 className="mb-3 text-xl lg:text-[30px]  ms-1">
            Price :
            <span className="font-bold ms-2">${singleProduct?.price}</span>
          </h4>
          <p className="ms-2 text-lg text-justify">
            {singleProduct?.description}
          </p>
          <div className="divider "></div>
          <h4 className=" text-xl lg:text-3xl mt-3 my-5 ms-2">
            Category:{" "}
            <span className="font-semibold">{singleProduct?.category}</span>
          </h4>
          {availableQuantity === 0 ? (
            <h4 className=" text-xl lg:text-2xl mt-3 my-5 ms-2">
              Stock Quantity:{" "}
              <span className="font-semibold">Out of Stock</span>
            </h4>
          ) : (
            <h4 className=" text-xl lg:text-2xl mt-3 my-5 ms-2">
              Stock Quantity:{" "}
              <span className="font-semibold">{availableQuantity}</span>
            </h4>
          )}

          <div className="flex  mt-8   justify-between">
            <div className="flex mt-5 items-center space-x-6 border rounded-lg h-[50px] justify-center w-[30%]">
              {count === 0 ? (
                <button className="   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
              ) : (
                <button onClick={() => setCount(count - 1)} className="   ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                </button>
              )}

              <span className="text-2xl font-semibold ">{count}</span>
              {singleProduct?.stockQuantity === count ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              ) : (
                <button onClick={() => setCount(count + 1)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              )}
            </div>

            <div className="w-[50%]">
              {/* for disabled the button */}
              {singleProduct?.stockQuantity === 0 ? (
                <button
                  disabled
                  className=" py-3  rounded-[40px] text-white font-semibold bg-[#4f918a] w-full  text-xl mt-[20px] hover:bg-[#1d2329]"
                >
                  Add To Cart
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(singleProduct)}
                  className=" py-3  rounded-[40px] text-white font-semibold bg-[#4f918a] w-full  text-xl mt-[20px] hover:bg-[#1d2329]"
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
