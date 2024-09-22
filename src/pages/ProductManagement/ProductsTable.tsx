import { toast } from "sonner";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../redux/api/api";
import { TProduct, TResponse } from "../../types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Table, Button, Space, Image, Modal } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

const ProductsTable = () => {
  const { data: products } = useGetProductsQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const { register, handleSubmit, reset } = useForm<TProduct>();

  const handleDelete = async (productDeleteId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteProduct(productDeleteId);
        toast.success(res.data?.message);
      }
    });
  };

  const handleEdit = (product: TProduct) => {
    console.log("Editing Product:", product);
    setSelectedProduct(product);
    reset(product);
    setIsModalVisible(true);
  };

  const onSubmit: SubmitHandler<TProduct> = async (data) => {
    const toastId = toast.loading("Updating....");
    const productData = {
      _id: selectedProduct?.key,
      name: data.name,
      price: Number(data.price),
      stockQuantity: Number(data.stockQuantity),
      description: data.description,
      category: data.category,
      image: data.image,
      ratings: Number(data.ratings),
      // ratings: data.ratings,
    };

    try {
      const res = (await updateProduct(productData)) as TResponse<any>;
      if (res.error) {
        toast.error(res.error?.data?.message, { id: toastId });
      } else {
        toast.success(res.data?.message, { id: toastId });
        setIsModalVisible(false);
      }
    } catch (err) {
      toast.error("Something Went Wrong!!");
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image: string) => (
        <Image width={50} height={50} src={image} alt="Product Image" />
      ),
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price}`,
      align: "center",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center",
    },
    {
      title: "Quantity", // Add Quantity column here
      dataIndex: "stockQuantity",
      key: "stockQuantity",
      align: "center",
      render: (quantity: number) => `${quantity} units`, // You can format it however you want
    },
    {
      title: "Actions",
      key: "actions",
      render: (text: any, record: TProduct) => (
        <Space size="middle">
          <Link to={`/products/${record.key}`}>
            <Button type="primary" size="small" icon={<EyeOutlined />}>
              Details
            </Button>
          </Link>
          <Button
            size="small"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Update
          </Button>
          <Button
            type="primary"
            danger
            size="small"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
      align: "center",
    },
  ];

  const dataSource = products?.data?.map((product: TProduct) => ({
    key: product._id,
    image: product.image,
    name: product.name,
    price: product.price,
    category: product.category,
    stockQuantity: product.stockQuantity, // Add stockQuantity here
    ratings: product.ratings, // Add ratings here
    description: product.description, // Add description here
  }));

  return (
    <div className="min-h-screen mt-12 mb-28 px-4">
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
        locale={{ emptyText: "No Product Found!!! Please Add" }}
        bordered
        rowClassName="hover:bg-gray-100"
        scroll={{ x: 576 }}
        style={{ textAlign: "center" }}
      />
      <Modal
        title="Update Product Information"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        // bodyStyle={{ padding: "20px" }} // Add padding to the body
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-800 mb-1">
                Product Name:
              </label>
              <input
                type="text"
                {...register("name")}
                className="block w-full rounded-md border border-gray-300 shadow-sm outline-none placeholder-gray-400 py-2 pl-3 pr-10 sm:text-sm focus:border-gray-400 focus:border-2"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-800 mb-1">
                Product Image Link:
              </label>
              <input
                {...register("image")}
                type="text"
                className="block w-full rounded-md border border-gray-300 shadow-sm  placeholder-gray-400 py-2 pl-3 pr-10 sm:text-sm focus:border-gray-400 focus:border-2 outline-none"
                placeholder="Enter image URL"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-800 mb-1">
                Product Price:
              </label>
              <input
                {...register("price")}
                type="text"
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:border-2 outline-none placeholder-gray-400 py-2 pl-3 pr-10 sm:text-sm"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-800 mb-1">
                Stock Quantity:
              </label>
              <input
                {...register("stockQuantity")}
                type="text"
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:border-2 outline-none placeholder-gray-400 py-2 pl-3 pr-10 sm:text-sm"
                placeholder="Enter stock quantity"
              />
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-800 mb-1">
                Category:
              </label>
              <select
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:border-2 outline-none py-2 pl-3 pr-10 sm:text-sm"
                {...register("category")}
              >
                <option value="Tents & Shelters">Tents & Shelters</option>
                <option value="Sleeping Gear">Sleeping Gear</option>
                <option value="Backpacks & Bags">Backpacks & Bags</option>
                <option value="Footwear">Footwear</option>
                <option value="Lighting & Navigation">
                  Lighting & Navigation
                </option>
                <option value="Camp Furniture">Camp Furniture</option>
                <option value="Health & Safety">Health & Safety</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-800 mb-1">
                Ratings:
              </label>
              <input
                {...register("ratings")}
                type="number"
                min="0"
                max="5"
                step="0.1"
                className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:border-2 outline-none placeholder-gray-400 py-2 pl-3 pr-10 sm:text-sm"
                placeholder="Rate 0-5"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-800 mb-1">
              Product Description:
            </label>
            <textarea
              className="textarea textarea-bordered w-full rounded-md border border-gray-300 shadow-sm focus:border-gray-400 focus:border-2 outline-none placeholder-gray-400 py-2 pl-3"
              {...register("description")}
              placeholder="Enter product description"
            ></textarea>
          </div>
          <div className="flex justify-end my-5">
            <button
              type="submit"
              className="w-[30%] custom-btn bg-blue-600 text-white hover:bg-blue-700 transition duration-200 rounded-md shadow-md py-2"
            >
              Update
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProductsTable;
