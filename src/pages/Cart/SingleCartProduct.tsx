import { useAppDispatch } from "../../redux/hook";
import {
  removeAProductFromCart,
  updateQuantity,
} from "../../redux/features/cartSlice";
import { Modal } from "antd";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

interface Product {
  _id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  stockQuantity: number; // Ensure stock is part of the Product interface
}

interface SingleCartProductProps {
  product: Product;
}

const SingleCartProduct: React.FC<SingleCartProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  // Handle quantity changes for the product
  const handleQuantity = (type: string, _id: string) => {
    const payload = { type, _id };

    // Check if incrementing exceeds stock limit
    if (type === "increment" && product.quantity >= product?.stockQuantity) {
      Swal.fire({
        icon: "warning",
        title: "Stock limit reached",
        text: `You cannot add more than ${product?.stockQuantity} items of this product.`,
        timer: 1500,
      });
      return;
    }

    dispatch(updateQuantity(payload));
  };

  // Handle product removal from cart with confirmation modal
  const handleRemoveAProductFromCart = () => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Do you want to delete this product from your cart?",
      okText: "Yes, delete it!",
      cancelText: "Cancel",
      onOk: () => {
        dispatch(removeAProductFromCart(product._id));
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Product has been Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between space-x-3 border-2 border-gray-200 rounded-3xl p-4 bg-white">
      <div className="bg-gray-200 w-[100px] h-[80px] rounded-2xl overflow-hidden me-2">
        <img
          src={product?.image}
          alt={product.name}
          className="w-full h-full object-contain object-center"
        />
      </div>

      <div className="lg:flex-grow lg:mx-4">
        <h3 className="lg:text-lg font-semibold mb-2">{product.name}</h3>
        <p className="lg:text-lg font-bold">${product?.price.toFixed(2)}</p>

        <div className="flex items-center space-x-2 mt-4">
          <button
            onClick={() => handleQuantity("decrement", product._id)}
            className="p-2 border rounded-full hover:bg-gray-200 transition duration-200"
            disabled={product.quantity <= 1}
          >
            <FaMinus />
          </button>

          <span className="text-2xl font-semibold">{product.quantity}</span>

          <button
            className="p-2 border rounded-full hover:bg-gray-200 transition duration-200"
            onClick={() => handleQuantity("increment", product._id)}
            // disabled={product.quantity >= product.stockQuantity} // This line checks the stock limit
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <button
        onClick={handleRemoveAProductFromCart}
        className="bg-gray-800 text-white text-xl p-2 rounded-full mt-4 lg:mt-0 hover:bg-red-800 transition duration-200"
      >
        <MdDeleteOutline />
      </button>
    </div>
  );
};

export default SingleCartProduct;
