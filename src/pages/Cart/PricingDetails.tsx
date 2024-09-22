import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { FaShoppingCart, FaDollarSign } from "react-icons/fa"; // Importing icons

const PricingDetails = () => {
  // Get selected products and total price from the Redux store
  const { selectedProducts, totalPrice, products } = useAppSelector(
    (store) => store.cart
  );

  return (
    <div className="lg:w-96 w-full bg-white rounded-lg shadow-lg p-6">
      <h1 className="text-xl font-bold text-gray-800 text-center mt-5 uppercase">
        Pricing Details
      </h1>
      <div className="divider my-4"></div>

      <div className="space-y-6">
        {/* Selected Products Section */}
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
          <div className="flex items-center ">
            <FaShoppingCart className="text-2xl text-blue-600 mr-2" />
            <p className="text-lg text-gray-700">
              Selected Products:{" "}
              <span className="font-semibold ">{selectedProducts}</span>
            </p>
          </div>
        </div>

        {/* Total Price Section */}
        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md shadow-sm">
          <div className="flex items-center">
            <FaDollarSign className="text-2xl text-green-600 mr-2" />
            <p className="text-lg text-gray-700">
              Total Price:{" "}
              <span className="font-semibold">${totalPrice.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="pb-5 mt-8">
        {products.length > 0 ? (
          <Link to="/checkout">
            <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
              Proceed To Checkout
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="w-full py-2 bg-gray-300 text-gray-500 font-semibold rounded-md cursor-not-allowed shadow-md"
          >
            Proceed To Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default PricingDetails;
