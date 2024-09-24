import "@smastrom/react-rating/style.css";
import { useGetProductsQuery } from "../redux/api/api";
// import { TProduct } from "../types";
import { useState } from "react";
import ProductCard from "../components/card/ProductCard";
import { Drawer, Slider, Button, Select } from "antd";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { LuFilter } from "react-icons/lu";
import {
  FaCampground,
  FaMapSigns,
  FaChair,
  FaFirstAid,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { GiRubberBoot, GiSchoolBag } from "react-icons/gi";
import { TProduct } from "../types";

const ProductsPage = () => {
  // State management for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  // const [minPrice, setMinPrice] = useState<number | "">("");
  // const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [sortByOrder, setSortByOrder] = useState<"asc" | "desc">("asc");
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Fetch products based on filters using the API query
  const { data: products } = useGetProductsQuery({
    searchQuery,
    category,
    minPrice,
    maxPrice,
    sortByOrder,
  });

  // Function to clear all filters
  const handleForClear = () => {
    setSearchQuery("");
    setCategory("All");
    // setMinPrice("");
    // setMaxPrice("");
    setMinPrice(0);
    setMaxPrice(100);
    setSortByOrder("asc");
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  // Function to show the drawer
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  return (
    <div className="mt-6 mb-28 px-4 lg:px-20 min-h-screen">
      <div className="divider font-semibold"></div>

      {/* Filter and Search Section */}
      <div className="flex flex-col lg:flex-row gap-4 pt-4 px-2 lg:px-0">
        {/* Filter Drawer Button for small devices */}
        <div className="lg:hidden my-2">
          <Button type="primary" onClick={showDrawer}>
            <LuFilter className="mr-2" />
            Open Filters
          </Button>
        </div>

        {/* Drawer for Small Devices */}
        <Drawer
          title="Filter"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="lg:hidden"
        >
          {/* Filter Content */}
          <div className="p-6">
            <div className="flex justify-between mb-4">
              <p className="font-semibold text-lg">Filter Products</p>
              <div className="flex items-center gap-1 text-blue-600 font-medium">
                <button onClick={handleForClear}>Reset All</button>
                <RxCross2
                  className="cursor-pointer"
                  onClick={() => setDrawerVisible(false)}
                />
              </div>
            </div>

            {/* Search Input */}
            <div className="relative flex items-center mt-4">
              <input
                className="p-3 rounded-lg w-full bg-gray-50 border border-blue-500 outline-none"
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2">
                <BiSearch className="text-xl text-blue-500" />
              </button>
            </div>

            {/* Category Filter with Icons */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 font-semibold mb-3">
                Categories
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { name: "All", icon: <FaUmbrellaBeach /> },
                  { name: "Tents & Shelters", icon: <FaCampground /> },
                  { name: "Backpacks & Bags", icon: <GiSchoolBag /> },
                  { name: "Footwear", icon: <GiRubberBoot /> },
                  { name: "Lighting & Navigation", icon: <FaMapSigns /> },
                  { name: "Camp Furniture", icon: <FaChair /> },
                  { name: "Health & Safety", icon: <FaFirstAid /> },
                ].map((option, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 cursor-pointer ${
                      category === option.name
                        ? "bg-blue-100 p-2 rounded-md"
                        : ""
                    }`}
                    onClick={() => setCategory(option.name)}
                  >
                    {option.icon}
                    <span>{option.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 font-semibold mb-2">
                Price Range
              </p>
              <Slider
                range
                value={[minPrice, maxPrice]}
                onChange={(value) => {
                  setMinPrice(value[0]);
                  setMaxPrice(value[1]);
                }}
                className="w-full"
              />
            </div>

            {/* Sorting Dropdown */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 font-semibold mb-3">
                Sort By
              </p>
              <Select
                defaultValue={sortByOrder}
                onChange={(value) => setSortByOrder(value)}
                className="w-full"
              >
                <Select.Option value="asc">Price: Low to High</Select.Option>
                <Select.Option value="desc">Price: High to Low</Select.Option>
              </Select>
            </div>
          </div>
        </Drawer>

        {/* Filter Section for larger devices */}
        <div className="hidden lg:block bg-gray-100 h-fit rounded-lg w-full lg:w-[28%] p-6 shadow-lg">
          <div className="flex justify-between mb-4">
            <p className="font-semibold text-lg">Filter Products</p>
            <div className="flex items-center gap-1 text-blue-600 font-medium">
              <button onClick={handleForClear}>Reset All</button>
              <RxCross2 className="cursor-pointer" onClick={closeDrawer} />
            </div>
          </div>

          {/* Search Input */}
          <div className="relative flex items-center mt-4">
            <input
              className="p-3 rounded-lg w-full bg-gray-50 border-[1px] border-blue-500 outline-none"
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2">
              <BiSearch className="text-xl text-blue-500" />
            </button>
          </div>

          {/* Category Filter with Icons */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 font-semibold mb-3">
              Categories
            </p>
            <div className="flex flex-col gap-4">
              {[
                { name: "All", icon: <FaUmbrellaBeach /> },
                { name: "Tents & Shelters", icon: <FaCampground /> },
                { name: "Backpacks & Bags", icon: <GiSchoolBag /> },
                { name: "Footwear", icon: <GiRubberBoot /> },
                { name: "Lighting & Navigation", icon: <FaMapSigns /> },
                { name: "Camp Furniture", icon: <FaChair /> },
                { name: "Health & Safety", icon: <FaFirstAid /> },
              ].map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors duration-200 ${
                    category === option.name
                      ? "bg-blue-100"
                      : "hover:bg-blue-100" // Hover effect added here
                  }`}
                  onClick={() => setCategory(option.name)}
                >
                  {option.icon}
                  <span>{option.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 font-semibold mb-2">
              Price Range
            </p>
            <Slider
              range
              value={[minPrice, maxPrice]}
              onChange={(value) => {
                setMinPrice(value[0]);
                setMaxPrice(value[1]);
              }}
              className="w-full"
            />
          </div>
          {/* Sorting Dropdown */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 font-semibold mb-3">Sort By</p>
            <Select
              defaultValue={sortByOrder}
              onChange={(value) => setSortByOrder(value)}
              className="w-full"
            >
              <Select.Option value="asc">Price: Low to High</Select.Option>
              <Select.Option value="desc">Price: High to Low</Select.Option>
            </Select>
          </div>
        </div>

        {/* Product Showcase Section */}
        <div className="w-full rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit lg:w-[72%]">
          {products?.data && products.data.length > 0 ? (
            products.data.map((product: TProduct) => (
              <ProductCard
                key={product._id}
                _id={product._id}
                name={product.name}
                image={product.image}
                price={product.price}
                category={product.category}
                ratings={product.ratings}
              />
            ))
          ) : (
            <h2 className="text-center">No products available.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
