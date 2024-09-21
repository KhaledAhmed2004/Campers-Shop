import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { SubmitHandler, useForm } from "react-hook-form";

import { clearCart } from "../../redux/features/cartSlice";
import { useAddOrderMutation } from "../../redux/api/api";
import { toast } from "sonner";
import { TResponse } from "../../types";

type CheckOutInputs = {
  name: string;
  email: string;
  number: string;
  address: string;
  cashOnDelivery: boolean;
};
const Checkout = () => {
  const { selectedProducts, totalPrice, products } = useAppSelector(
    (store) => store.cart
  );
  const { register, handleSubmit } = useForm<CheckOutInputs>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [addOrder] = useAddOrderMutation();
  const onSubmit: SubmitHandler<CheckOutInputs> = async (data) => {
    const toastId = toast.loading("Creating....");
    // console.log(data.cashOnDelivery);
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
      }
    } catch (err) {
      toast.error("Something Went Wrong!!");
    }

    dispatch(clearCart());
    navigate("/success");
    // console.log(data);
  };
  return (
    <div className=" min-h-screen mt-12 mb-28 px-4 lg:px-20 ">
      <div className=" mt-3 side-text ">
        <p className="font-semibold ms-2 lg:text-[22px] primary-color">
          Checkout
        </p>
        <div className="flex justify-between mt-0 ">
          <h2 className=" lg:text-2xl  ms-2  font-[500]  ">
            Finalize Your Order
          </h2>
        </div>
      </div>
      <div className="divider">Checkout Information</div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="lg:flex   justify-between gap-10  w-full ">
          {/* CheckOut Form */}

          <div className="lg:w-[80%] border p-10 mt-8">
            <div className="mb-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Name :
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  required
                  {...register("name")}
                  placeholder="Your Name"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email :
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  required
                  {...register("email")}
                  placeholder="Email"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number:
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  required
                  {...register("number")}
                  placeholder="Phone Number"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Address:
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <textarea
                  required
                  className="textarea textarea-bordered w-full"
                  placeholder="Describe Your Shipping Address"
                  {...register("address")}
                ></textarea>
              </div>
            </div>
          </div>
          {/* Order Details */}
          <div className="mt-7 ">
            <div className="lg:w-96 w-full  border border-gray-200 bg-opacity-35 rounded-md">
              <h1 className="text-3xl font-bold text-dark text-center  mt-5 uppercase">
                Order Details
              </h1>
              <div className="divider mt-0"></div>
              <div className="px-6 py-4 space-y-6 ">
                <p className="text-lg font-semibold text-dark mt-2">
                  Selected Products: {selectedProducts}
                </p>
                <p className="text-lg text-dark font-semibold mt-2">
                  Total Price: ${totalPrice}
                </p>
              </div>
              <div className=" flex items-center ms-7 mt-3  space-x-2">
                <input
                  {...register("cashOnDelivery")}
                  type="checkbox"
                  className="checkbox "
                  required
                />
                <label className="text-xl font-bold ">Cash on Delivery</label>
              </div>
              <div className="pb-5 px-4 mt-10 ">
                {/* <Link to="/success"> */}
                <button type="submit" className="custom-outline-btn w-full ">
                  Place Order
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
