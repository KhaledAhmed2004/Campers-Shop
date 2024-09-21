import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../redux/api/api";
import { TProduct } from "../../types";
import ProductCard from "../card/ProductCard";

const RecommendedProducts = () => {
  const { data: products } = useGetProductsQuery({});
  console.log(products);

  return (
    <div className="mt-12 mb-28 px-4 md:px-10 lg:px-16">
      {/* Section Header */}
      <div className="text-center mb-8">
        <p className="font-semibold text-lg md:text-xl lg:text-2xl">
          Explore Our
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold">
          <span className="text-orange-600">Recommended</span> Products
        </h2>
      </div>

      {/* Products Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-6">
        {products?.data?.slice(0, 6).map((product: TProduct) => (
          <ProductCard
            key={product._id}
            _id={product._id}
            name={product.name}
            image={product.image}
            price={product.price}
            category={product.category}
            ratings={product.ratings}
          />
        ))}
      </div>
      <div className="flex my-6 justify-center">
        <Link
          to="/products"
          className="border-2 border-orange-600 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default RecommendedProducts;
