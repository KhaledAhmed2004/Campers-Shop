import { useAppSelector } from "../../redux/hook";
import PricingDetails from "./PricingDetails";
import SingleCartProduct from "./SingleCartProduct";

const Cart = () => {
  // Get the products from the Redux store
  const products = useAppSelector((store) => store.cart.products);

  return (
    <div className="my-[70px] px-4 lg:px-20 min-h-screen">
      <div className="lg:flex lg:flex-row lg:space-y-0 space-y-5 justify-center lg:space-x-40">
        <div className="space-y-5 lg:mt-0 mt-5 w-full lg:w-2/3">
          {/* Cart Products */}
          {products.length ? (
            products.map((product: any) => (
              <SingleCartProduct key={product._id} product={product} />
            ))
          ) : (
            <p className="text-lg text-gray-600">No Product Found</p>
          )}
        </div>

        {/* Order pricing details */}
        <PricingDetails />
      </div>
    </div>
  );
};

export default Cart;
