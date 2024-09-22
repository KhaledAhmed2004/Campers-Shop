import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAddOrderMutation } from "../../redux/api/api";
// import toast from "react-hot-toast";
import { toast } from "sonner";
import { clearCart } from "../../redux/features/cartSlice";
import { TResponse } from "../../types";

type CheckOutInputs = {
  name: string;
  email: string;
  number: string;
  address: string;
  cashOnDelivery: boolean;
};

const CheckoutPage = () => {
  const { totalPrice, products } = useAppSelector((store) => store.cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckOutInputs>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [addOrder] = useAddOrderMutation();

  const onSubmit: SubmitHandler<CheckOutInputs> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating order...");

    const orderInformation = {
      name: data.name,
      email: data.email,
      number: data.number,
      address: data.address,
      cashOnDelivery: data.cashOnDelivery,
      products: products.map((item: any) => ({
        product: item._id,
        quantity: item.quantity,
      })),
    };

    try {
      const res = (await addOrder(orderInformation)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success(res.data?.message, { id: toastId });
        dispatch(clearCart());
        navigate("/success");
      }
    } catch (err) {
      toast.error("Something went wrong!", { id: toastId });
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Order Summary */}
          <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="border-b pb-4 mb-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex justify-between items-center"
                >
                  <p className="text-gray-600">{product.name}</p>
                  <p className="text-gray-800 font-semibold">
                    ৳ {product.price * product.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-lg font-semibold">
              <p>Total</p>
              <p>৳ {totalPrice}</p>
            </div>
          </div>

          {/* Payment info Section */}
          <div className="lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Payment Info
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4 mb-6">
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  placeholder="Full Name"
                  className={`w-full p-3 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                  aria-label="Full Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}

                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className={`w-full p-3 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                  aria-label="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

                <input
                  {...register("number", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full p-3 border ${
                    errors.number ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                  aria-label="Phone Number"
                />
                {errors.number && (
                  <p className="text-red-500 text-sm">
                    {errors.number.message}
                  </p>
                )}

                <input
                  {...register("address", { required: "Address is required" })}
                  type="text"
                  placeholder="Address Line 1"
                  className={`w-full p-3 border ${
                    errors.address ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                  aria-label="Address Line 1"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}

                <div className="flex items-center space-x-2">
                  <input
                    {...register("cashOnDelivery")}
                    type="checkbox"
                    id="cashOnDelivery"
                    className="checkbox"
                  />
                  <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
