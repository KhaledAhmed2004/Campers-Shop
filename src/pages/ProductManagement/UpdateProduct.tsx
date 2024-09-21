import { SubmitHandler, useForm } from "react-hook-form";
import { TProduct, TResponse } from "../../types";
import { useParams } from "react-router-dom";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../redux/api/api";
import { toast } from "sonner";

const UpdateProduct = () => {
  const { data: products } = useGetProductsQuery({});
  const { id } = useParams();
  const product = products?.data?.find((item) => item._id === id);
  const [updateProduct] = useUpdateProductMutation();
  // console.log(product);
  const { register, handleSubmit } = useForm<TProduct>();
  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    const toastId = toast.loading("Updating....");
    // console.log(data);
    const productData = {
      _id: id,
      name: data.name,
      price: Number(data.price),
      stockQuantity: Number(data.stockQuantity),
      description: data.description,
      category: data.category,
      image: data.image,
      ratings: Number(data.ratings),
    };
    try {
      const res = (await updateProduct(productData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success(res.data?.message, { id: toastId });
      }
    } catch (err) {
      toast.error("Something Went Wrong!!");
    }
    console.log(productData);
    // updateProduct()
  };
  return (
    <div className=" min-h-screen mt-12 mb-28 px-4 lg:px-24 ">
      {/* content */}
      <h3 className="text-lg font-bold"></h3>
      <div className="divider">Update Your Product Information</div>
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
                defaultValue={product?.name}
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
                defaultValue={product?.image}
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
                type="text"
                defaultValue={product?.price}
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
                defaultValue={product?.stockQuantity}
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
                defaultValue={product?.category}
              >
                <option>Tents & Shelters</option>
                <option>Sleeping Gear</option>
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
                defaultValue={product?.ratings}
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
              defaultValue={product?.description}
              {...register("description")}
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end    my-5">
          <button type="submit" className=" w-[20%] custom-btn ">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
