import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../redux/api/api";
import { Rating } from "@smastrom/react-rating";
import { useAppDispatch } from "../redux/hook";
import { TProduct } from "../types";
import { addToCart } from "../redux/features/cartSlice";
import { useState } from "react";
import swal from "sweetalert2";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductDetailsPage = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const { data } = useProductDetailsQuery(id); // Fetch product details
  const [count, setCount] = useState(1); // Local state to manage quantity

  const singleProduct = data?.data; // Get the product data from the fetched data
  const dispatch = useAppDispatch();
  const availableQuantity = singleProduct?.stockQuantity - count || 0;
  // Function to handle adding the product to the cart
  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart({ product, quantity: count })); // Dispatch the addToCart action
    swal.fire({
      // Show success notification
      title: "Product Added Successfully",
      text: "Go to Cart Page to Place Order",
      icon: "success",
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div className="my-20 px-4 lg:px-20 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
        {/* Product Image */}
        <div className="lg:w-1/2 h-[450px] bg-gray-100 flex justify-center items-center rounded-lg shadow-lg">
          <img
            src={singleProduct?.image}
            alt="Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h4 className="mb-2 font-medium text-lg text-gray-600">
            {singleProduct?.category} {/* Display product category */}
          </h4>
          <h4 className="mb-4 font-bold text-3xl text-gray-800">
            {singleProduct?.name} {/* Display product name */}
          </h4>
          <p className="text-lg text-gray-700 mb-4">
            {singleProduct?.description} {/* Display product description */}
          </p>

          {/* Product Ratings */}
          <div className="mb-4 flex gap-4 items-center">
            <Rating
              style={{ maxWidth: 110 }}
              value={singleProduct?.ratings}
              readOnly
            />
            <span className="text-xl font-semibold">
              {singleProduct?.ratings}{" "}
              <span className="text-gray-500">/ 5</span>
            </span>
          </div>

          {/* Product Price */}
          <div className="flex items-center text-3xl mb-4">
            <TbCurrencyTaka className="text-3xl text-gray-600" />
            <p className="font-bold text-gray-800">{singleProduct?.price}</p>
          </div>

          <div className="divider mb-4"></div>

          {/* Stock Quantity */}
          <h4 className="text-xl mt-3">
            Stock Quantity:{" "}
            <span
              className={`font-semibold ${
                availableQuantity === 0 ? "text-red-500" : "text-gray-800"
              }`}
            >
              {availableQuantity === 0 ? "Out of Stock" : availableQuantity}
            </span>
          </h4>

          {/* Quantity Selector and Add to Cart Button */}
          <div className="flex mt-8 justify-between items-center">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded-lg h-[50px] justify-center w-[30%]">
              <button
                onClick={() => count > 1 && setCount(count - 1)}
                disabled={count === 1}
              >
                <FaMinus className="text-gray-600 hover:text-gray-800" />
              </button>
              <span className="text-2xl font-semibold mx-2">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                disabled={singleProduct?.stockQuantity === count}
              >
                <FaPlus className="text-gray-600 hover:text-gray-800" />
              </button>
            </div>
          </div>
          {/* Add to Cart Button */}
          <div className="w-[60%]">
            <button
              onClick={() => handleAddToCart(singleProduct)}
              disabled={singleProduct?.stockQuantity === 0}
              className={`py-3 rounded-full text-white font-semibold w-full text-xl mt-4 transition duration-300 
                  ${
                    singleProduct?.stockQuantity === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-yellow-600 hover:bg-yellow-700"
                  }`}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
