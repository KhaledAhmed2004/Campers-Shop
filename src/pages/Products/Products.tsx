import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/api";
import { TProduct } from "../../types";
import ProductsGallery from "./ProductsGallery";

import { useState } from "react";
const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinprice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [sortByOrder, setSortByOrder] = useState<"asc" | "desc">("asc");

  const { data: products } = useGetProductsQuery({
    searchQuery,
    category,
    minPrice,
    maxPrice,
    sortByOrder,
  });

  // for clear filters
  const handleForClear = () => {
    setSearchQuery("");
    setCategory("All");
    setMinprice("");
    setMaxPrice("");
    setSortByOrder("asc");
  };

  return (
    <div className="mt-6 mb-28 px-4 lg:px-20 min-h-screen">
      <div className=" side-text   mb-10">
        <p className="font-semibold ms-2 lg:text-[22px] ">
          Product <span className="primary-color">Collections</span>
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            Find the Perfect Camping Essentials
          </h2>
        </div>
      </div>
      <ProductsGallery />
      <div className="divider font-semibold  "></div>
      {/* search */}

      <div className="lg:flex justify-between items-center w-full">
        <div className="">
          <label className="input input-bordered my-5 flex items-center ">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search Your Product"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="lg:w-[80%] flex justify-end gap-2">
          <div className="lg:w-[20%]">
            <select
              className=" select select-bordered w-full max-w-xs"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Tents & Shelters">Tents & Shelters</option>
              <option value="Backpacks & Bags">Backpacks & Bags</option>
              <option value="Footwear">Footwear</option>
              <option value="Lighting & Navigation">
                Lighting & Navigation
              </option>
              <option value="Camp Furniture">Camp Furniture</option>
              <option value="Health & Safety">Health & Safety</option>
            </select>
          </div>
          <div className="lg:w-[20%]">
            <input
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value ? Number(e.target.value) : "")
              }
              type="string"
              className="input input-bordered w-full max-w-xs"
              placeholder="MaximumP Price"
            />
          </div>
          <div className="lg:w-[20%]">
            <input
              value={minPrice}
              onChange={(e) =>
                setMinprice(e.target.value ? Number(e.target.value) : "")
              }
              type="string"
              className="input input-bordered w-full max-w-xs"
              placeholder=" Minimum Price"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-6 lg:mt-0 mt-3">
        <div className=" ms-2">
          <select
            className="select select-bordered w-full max-w-xs"
            value={sortByOrder}
            onChange={(e) => setSortByOrder(e.target.value as "asc" | "desc")}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <button className="custom-outline-btn " onClick={handleForClear}>
          Clear Filters
        </button>
      </div>

      {/* Products */}
      <div className="mt-5 mx-5 card-grid   gap-6 ">
        {products?.data && products?.data?.length > 0 ? (
          products?.data?.map((product: TProduct) => (
            <div
              key={product._id}
              className="card card-compact bg-base-100 max-w-[360px] shadow-md rounded-[2px] mx-auto"
            >
              <div className="bg-base-200 w-[360px]  h-[220px] flex justify-center items-center">
                <img
                  src={product.image}
                  alt="Product Picture"
                  className=" w-full h-full "
                />
              </div>
              <div className=" my-4 mx-5">
                <h3 className="card-title">{product?.name}</h3>
                <h4 className=" text-lg mt-3 ">
                  Price:{" "}
                  <span className="font-semibold">${product?.price}</span>
                </h4>
                <h4 className=" text-lg mt-3 ">
                  Category:{" "}
                  <span className="font-semibold">${product?.category}</span>
                </h4>

                <div className="card-actions items-center justify-between mt-2">
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
          ))
        ) : (
          <h2 className="text-center">No Product Found!!! </h2>
        )}
      </div>
    </div>
  );
};

export default Products;
