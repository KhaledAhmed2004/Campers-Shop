import { FaTents } from "react-icons/fa6";
import { GiSchoolBag, GiSteeltoeBoots, GiFirstAidKit } from "react-icons/gi";
import { MdOutdoorGrill } from "react-icons/md";
import { FaHiking } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  const categories = [
    {
      icon: <MdOutdoorGrill className="h-32 w-32 text-yellow-600" />,
      title: "Outdoor Furniture",
    },
    {
      icon: <FaTents className="h-32 w-32 text-yellow-600" />,
      title: "Camp Furniture",
    },
    {
      icon: <FaHiking className="h-32 w-32 text-yellow-600" />,
      title: "Hiking Equipment",
    },
    {
      icon: <GiSteeltoeBoots className="h-32 w-32 text-yellow-600" />,
      title: "Footwear",
    },
    {
      icon: <GiFirstAidKit className="h-32 w-32 text-yellow-600" />,
      title: "Safety & First Aid",
    },
    {
      icon: <GiSchoolBag className="h-32 w-32 text-yellow-600" />,
      title: "Backpacks & Bags",
    },
  ];

  return (
    <div className="mb-16 px-5 lg:px-20">
      {/* Section Title */}
      <div className="text-center mb-12">
        <p className="text-lg font-semibold text-primary">Categories</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
          Browse Products by Category
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300"
          >
            {/* Category Image */}
            <div className="w-full h-48 flex justify-center items-center bg-gray-50">
              {category.icon}
            </div>

            {/* Category Name */}
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-gray-700 group-hover:text-primary">
                {category.title}
              </h3>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
              <Link
                to={"/products"}
                className="bg-white text-primary px-8 py-3 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
