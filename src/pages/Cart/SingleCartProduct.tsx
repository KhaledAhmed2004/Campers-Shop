import { useAppDispatch } from "../../redux/hook";
import {
  removeAProductFromCart,
  updateQuantity,
} from "../../redux/features/cartSlice";
import Swal from "sweetalert2";

const SingleCartProduct = ({ product }: any) => {
  const dispatch = useAppDispatch();

  // handle Quantity Function
  const handleQuantity = (type: string, _id: string) => {
    const payload = { type, _id };
    dispatch(updateQuantity(payload));
  };
  // handle Remove A Product From Cart
  const handleRemoveAProductFromCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAProductFromCart(product._id));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Product has been Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div className="flex items-center justify-between space-x-3 border border-gray-200  rounded-3xl p-4 bg-white shadow-md ">
      <div className="bg-gray-200  w-[100px] me-2 h-[80px] rounded-2xl">
        <img
          src={product?.image}
          alt="product image"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="lg:flex-grow lg:mx-4">
        <h3 className="lg:text-lg font-semibold mb-2">{product.name}</h3>
        <p className="lg:text-lg font-bold">${product?.price}</p>
      </div>
      <div className="flex items-center space-x-2 mt-16">
        <button
          onClick={() => handleQuantity("decrement", product._id)}
          className=" btn btn-sm bg-[hsl(177,30%,35%)] text-white "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </button>

        <span className="text-2xl font-semibold ">{product.quantity}</span>

        <button
          className=" btn btn-sm bg-[hsl(177,30%,35%)] text-white"
          onClick={() => handleQuantity("increment", product._id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className=" size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      <button
        onClick={handleRemoveAProductFromCart}
        className="bg-red-600  text-white p-2 rounded-full mt-16  hover:bg-red-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default SingleCartProduct;
