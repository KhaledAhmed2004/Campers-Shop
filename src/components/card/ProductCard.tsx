import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

type ProductCardProps = {
  _id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  ratings: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  _id,
  name,
  image,
  price,
  category,
  ratings,
}) => {
  return (
    <div className="card card-compact bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
      {/* Product Image */}
      <div className="w-full h-[220px] bg-gray-100 flex justify-center items-center">
        <img
          src={image || "/default-product-image.jpg"}
          alt={name || "Product Picture"}
          className="w-full h-full object-fit bg-center transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {name || "Unnamed Product"}
        </h3>

        {/* Price */}
        <h4 className="text-primary text-xl font-semibold mt-2">
          ${price ? price.toFixed(2) : "Not Available"}
        </h4>

        {/* Category */}
        <p className="text-sm text-gray-500 mt-1">
          Category: {category || "Unknown"}
        </p>

        {/* Ratings */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
            <span className="ml-2 text-gray-600">{ratings}/5</span>
          </div>

          {/* Product Details Link */}
          <Link
            to={`/products/${_id}`}
            className="border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
