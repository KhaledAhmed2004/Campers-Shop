import { SubmitHandler, useForm } from "react-hook-form";
import { TProduct, TResponse } from "../../types";
import { useAddProductMutation } from "../../redux/api/api";
import { toast } from "sonner";

const CreateProductModal = () => {
  const [addProduct] = useAddProductMutation();
  const { register, handleSubmit } = useForm<TProduct>();
  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    const toastId = toast.loading("Creating....");
    // console.log(data);
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
      <div className="flex justify-end my-2">
        <label className="custom-btn" htmlFor="my_modal">
          Create Product
        </label>
      </div>

      <input type="checkbox" id="my_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-2xl">
          {/* close button */}
          <label
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            htmlFor="my_modal"
          >
            ✕
          </label>

          {/* content */}
          <h3 className="text-lg font-bold">Add New Product to Inventory</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 mt-7 mb-2">
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Product Name :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Product Name"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Product Image Link :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("image")}
                    type="text"
                    placeholder="Product Image"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Product Price :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("price")}
                    type="number"
                    placeholder="Product Price"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Stock-Quantity :
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("stockQuantity")}
                    type="text"
                    placeholder="Stock-Quantity"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Category:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <select
                    className=" block w-full rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6"
                    {...register("category")}
                  >
                    <option disabled selected>
                      Select Category
                    </option>
                    <option>Tents & Shelters</option>
                    <option>Backpacks & Bags</option>
                    <option>Footwear</option>
                    <option>Lighting & Navigation</option>
                    <option>Camp Furniture</option>
                    <option>Health & Safety</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Ratings:
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    {...register("ratings")}
                    type="text"
                    placeholder="Rating"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Product Description :
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <textarea
                  className="textarea textarea-bordered w-full"
                  placeholder="Describe Your Product"
                  {...register("description")}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-end my-3">
              <button type="submit" className=" custom-btn ">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProductModal;
