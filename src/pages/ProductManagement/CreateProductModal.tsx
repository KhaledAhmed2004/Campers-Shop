// import { SubmitHandler, useForm } from "react-hook-form";
// import { TProduct, TResponse } from "../../types";
// import { useAddProductMutation } from "../../redux/api/api";
// import { toast } from "sonner";

// const CreateProductModal = () => {
//   const [addProduct] = useAddProductMutation();
//   const { register, handleSubmit } = useForm<TProduct>();
//   const onSubmit: SubmitHandler<TProduct> = async (data) => {
//     const toastId = toast.loading("Creating....");
//     // console.log(data);
//     const productData = {
//       name: data.name,
//       price: Number(data.price),
//       stockQuantity: Number(data.stockQuantity),
//       description: data.description,
//       category: data.category,
//       image: data.image,
//       ratings: Number(data.ratings),
//     };
//     try {
//       const res = (await addProduct(productData)) as TResponse<any>;
//       if (res.error) {
//         toast.error(res.error?.data?.message, { id: toastId });
//       } else {
//         toast.success(res.data?.message, { id: toastId });
//       }
//     } catch (err) {
//       toast.error("Something Went Wrong!!");
//     }
//   };
//   return (
//     <div>
//       <div className="flex justify-end my-2">
//         <label className="custom-btn" htmlFor="my_modal">
//           Create Product
//         </label>
//       </div>

//       <input type="checkbox" id="my_modal" className="modal-toggle" />
//       <div className="modal" role="dialog">
//         <div className="modal-box max-w-2xl">
//           {/* close button */}
//           <label
//             className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             htmlFor="my_modal"
//           >
//             ✕
//           </label>

//           {/* content */}
//           <h3 className="text-lg font-bold">Add New Product to Inventory</h3>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 mt-7 mb-2">
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Product Name :
//                 </label>
//                 <div className="relative mt-2 rounded-md shadow-sm">
//                   <input
//                     type="text"
//                     {...register("name")}
//                     placeholder="Product Name"
//                     className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Product Image Link :
//                 </label>
//                 <div className="relative mt-2 rounded-md shadow-sm">
//                   <input
//                     {...register("image")}
//                     type="text"
//                     placeholder="Product Image"
//                     className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Product Price :
//                 </label>
//                 <div className="relative mt-2 rounded-md shadow-sm">
//                   <input
//                     {...register("price")}
//                     type="number"
//                     placeholder="Product Price"
//                     className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Stock-Quantity :
//                 </label>
//                 <div className="relative mt-2 rounded-md shadow-sm">
//                   <input
//                     {...register("stockQuantity")}
//                     type="text"
//                     placeholder="Stock-Quantity"
//                     className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Category:
//                 </label>
//                 <div className="relative mt-2 rounded-md shadow-sm">
//                   <select
//                     className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
//                     {...register("category")}
//                   >
//                     <option disabled selected>
//                       Select Category
//                     </option>
//                     <option>Tents & Shelters</option>
//                     <option>Backpacks & Bags</option>
//                     <option>Footwear</option>
//                     <option>Lighting & Navigation</option>
//                     <option>Camp Furniture</option>
//                     <option>Health & Safety</option>
//                   </select>
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium leading-6 text-gray-900">
//                   Ratings:
//                 </label>
//                 <div className="relative mt-2 rounded-md shadow-sm">
//                   <input
//                     {...register("ratings")}
//                     type="text"
//                     placeholder="Rating"
//                     className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium leading-6 text-gray-900">
//                 Product Description :
//               </label>
//               <div className="relative mt-2 rounded-md shadow-sm">
//                 <textarea
//                   className="textarea textarea-bordered w-full"
//                   placeholder="Describe Your Product"
//                   {...register("description")}
//                 ></textarea>
//               </div>
//             </div>
//             <div className="flex justify-end my-3">
//               <button type="submit" className=" custom-btn ">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateProductModal;

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TProduct, TResponse } from "../../types";
import { useAddProductMutation } from "../../redux/api/api";
import { toast } from "sonner";
import { Modal, Button } from "antd";
import {
  InboxOutlined,
  TagOutlined,
  DollarOutlined,
  NumberOutlined,
  StarOutlined,
  FileTextOutlined,
  ShopOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const CreateProductModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addProduct] = useAddProductMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    const toastId = toast.loading("Creating....");
    const productData = {
      name: data.name,
      price: Number(data.price),
      stockQuantity: Number(data.stockQuantity),
      description: data.description,
      category: data.category,
      image: data.image,
      ratings: Number(data.ratings),
    };
    try {
      const res = (await addProduct(productData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success(res.data?.message, { id: toastId });
      }
    } catch (err) {
      toast.error("Something Went Wrong!!");
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <div className="flex justify-end my-4">
        <Button
          type="primary"
          onClick={showModal}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-500 hover:to-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center"
          icon={<PlusOutlined />}
        >
          Add New Product
        </Button>
      </div>

      {/* Modal for creating a product */}
      <Modal
        title="Add New Product to Inventory"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null} // Custom footer for form submission
        className="max-w-lg w-full mx-auto"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Product Name */}
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <TagOutlined className="mr-2" /> Product Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter product name"
              {...register("name", { required: "Product name is required" })}
              className="input-field border rounded-lg w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
            />
            {errors.name && (
              <span className="text-red-500 text-xs">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Product Image */}
          <div className="form-group">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <InboxOutlined className="mr-2" /> Product Image Link
            </label>
            <input
              id="image"
              type="text"
              placeholder="Enter product image URL"
              {...register("image", {
                required: "Product image link is required",
              })}
              className="input-field border rounded-lg w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
            />
            {errors.image && (
              <span className="text-red-500 text-xs">
                {errors.image.message}
              </span>
            )}
          </div>

          {/* Product Price */}
          <div className="form-group">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <DollarOutlined className="mr-2" /> Product Price
            </label>
            <input
              id="price"
              type="number"
              placeholder="Enter product price"
              {...register("price", { required: "Product price is required" })}
              className="input-field border rounded-lg w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
            />
            {errors.price && (
              <span className="text-red-500 text-xs">
                {errors.price.message}
              </span>
            )}
          </div>

          {/* Stock Quantity */}
          <div className="form-group">
            <label
              htmlFor="stockQuantity"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <NumberOutlined className="mr-2" /> Stock Quantity
            </label>
            <input
              id="stockQuantity"
              type="number"
              placeholder="Enter stock quantity"
              {...register("stockQuantity", {
                required: "Stock quantity is required",
              })}
              className="input-field border rounded-lg w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
            />
            {errors.stockQuantity && (
              <span className="text-red-500 text-xs">
                {errors.stockQuantity.message}
              </span>
            )}
          </div>

          {/* Category */}
          <div className="form-group">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <ShopOutlined className="mr-2" /> Category
            </label>
            <select
              id="category"
              {...register("category", { required: "Category is required" })}
              className="input-field border rounded-lg w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
            >
              <option value="">Select Category</option>
              <option value="Tents & Shelters">Tents & Shelters</option>
              <option value="Backpacks & Bags">Backpacks & Bags</option>
              <option value="Footwear">Footwear</option>
              <option value="Lighting & Navigation">
                Lighting & Navigation
              </option>
              <option value="Camp Furniture">Camp Furniture</option>
              <option value="Health & Safety">Health & Safety</option>
            </select>
            {errors.category && (
              <span className="text-red-500 text-xs">
                {errors.category.message}
              </span>
            )}
          </div>

          {/* Ratings */}
          <div className="form-group">
            <label
              htmlFor="ratings"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <StarOutlined className="mr-2" /> Ratings
            </label>
            <input
              id="ratings"
              type="number"
              placeholder="Enter ratings"
              {...register("ratings", { required: "Ratings are required" })}
              className="input-field border rounded-lg w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
            />
            {errors.ratings && (
              <span className="text-red-500 text-xs">
                {errors.ratings.message}
              </span>
            )}
          </div>

          {/* Product Description */}
          <div className="form-group">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <FileTextOutlined className="mr-2" /> Product Description
            </label>
            <textarea
              id="description"
              placeholder="Enter product description"
              {...register("description", {
                required: "Product description is required",
              })}
              className="input-field border rounded-lg w-full px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150"
            />
            {errors.description && (
              <span className="text-red-500 text-xs">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <Button
              type="primary"
              htmlType="submit"
              className="bg-gradient-to-r from-green-400 to-teal-500 hover:from-teal-400 hover:to-green-500 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex items-center"
              icon={<SaveOutlined />}
            >
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CreateProductModal;
