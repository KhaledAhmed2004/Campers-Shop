import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductDetailsQuery } from "../redux/api/api";
import { Rating } from "@smastrom/react-rating";
import { useAppDispatch } from "../redux/hook";
import { TProduct } from "../types";
import { addToCart } from "../redux/features/cartSlice";
import swal from "sweetalert2";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaPlus, FaMinus } from "react-icons/fa6";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data } = useProductDetailsQuery(id);
  const [count, setCount] = useState(1);
  const [glassPosition, setGlassPosition] = useState({
    display: "none",
    left: "0px",
    top: "0px",
    backgroundPosition: "0px 0px",
    backgroundImage: "",
    backgroundSize: "0px 0px",
  });

  const singleProduct = data?.data;
  const dispatch = useAppDispatch();
  const availableQuantity = singleProduct?.stockQuantity - count || 0;

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset count if product is out of stock
    if (singleProduct && singleProduct.stockQuantity === 0) {
      setCount(0); // or set to 1 if you prefer
    } else {
      setCount(1); // Reset to 1 if there's stock
    }
  }, [singleProduct]);

  const handleAddToCart = (product: TProduct) => {
    if (count > 0) {
      dispatch(addToCart({ product, quantity: count }));
      swal.fire({
        title: "Product Added Successfully",
        text: "Go to Cart Page to Place Order",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  // Magnifier logic
  useEffect(() => {
    const img = imgRef.current;

    function moveMagnifier(e: MouseEvent) {
      if (!img) return;

      const imgRect = img.getBoundingClientRect();
      const glassSize = 150;
      const x = e.pageX - imgRect.left;
      const y = e.pageY - imgRect.top;

      if (x > 0 && y > 0 && x < imgRect.width && y < imgRect.height) {
        const displayX = x - glassSize / 2;
        const displayY = y - glassSize / 2;

        setGlassPosition({
          display: "block",
          left: `${displayX}px`,
          top: `${displayY}px`,
          backgroundPosition: `-${x * 2}px -${y * 2}px`,
          backgroundImage: `url(${singleProduct?.image})`,
          backgroundSize: `${imgRect.width * 2}px ${imgRect.height * 2}px`,
        });
      } else {
        setGlassPosition({ ...glassPosition, display: "none" });
      }
    }

    if (img) {
      img.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mouseleave", () =>
        setGlassPosition({ ...glassPosition, display: "none" })
      );
    }

    return () => {
      if (img) {
        img.removeEventListener("mousemove", moveMagnifier);
        img.removeEventListener("mouseleave", () =>
          setGlassPosition({ ...glassPosition, display: "none" })
        );
      }
    };
  }, [singleProduct?.image, glassPosition]);

  return (
    <div className="my-20 px-4 lg:px-20 min-h-screen">
      <style>
        {`
          .img-magnifier-container {
            position: relative;
          }
          .img-magnifier-glass {
            position: absolute;
            border: 3px solid #000;
            border-radius: 50%;
            cursor: none;
            width: 150px;
            height: 150px;
            pointer-events: none;
            display: none;
          }
        `}
      </style>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8">
        {/* Product Image with Magnifier */}
        <div className="overflow-hidden bg-center bg-contain lg:w-1/2 h-[450px] bg-gray-100 flex justify-center items-center rounded-lg shadow-lg img-magnifier-container">
          <img
            ref={imgRef}
            src={singleProduct?.image}
            alt="Product"
            className="w-full h-full rounded-lg object-contain object-center"
          />
          <div
            className="img-magnifier-glass"
            style={{
              display: glassPosition.display,
              left: glassPosition.left,
              top: glassPosition.top,
              backgroundImage: glassPosition.backgroundImage,
              backgroundSize: glassPosition.backgroundSize,
              backgroundPosition: glassPosition.backgroundPosition,
            }}
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <h4 className="mb-2 font-medium text-lg text-gray-600">
            {singleProduct?.category}
          </h4>
          <h4 className="mb-4 font-bold text-3xl text-gray-800">
            {singleProduct?.name}
          </h4>
          <p className="text-lg text-gray-700 mb-4">
            {singleProduct?.description}
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
                onClick={() =>
                  count < singleProduct?.stockQuantity && setCount(count + 1)
                }
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
