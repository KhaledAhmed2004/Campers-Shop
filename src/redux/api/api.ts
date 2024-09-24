import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct, TResponseRedux, TUpdateProduct } from "../../types";

export const baseApi = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://campers-shop-server-theta.vercel.app/api",
    // baseUrl: "http://localhost:5000/api",
  }),

  tagTypes: ["product", "order"],

  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query({
      query: (params) => {
        return {
          url: "/products",
          method: "GET",
          params, // Parameters for filtering or pagination can be passed here
        };
      },

      providesTags: ["product"],

      // Transform the response to match the structure used in the app
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
        };
      },
    }),

    // Get product details by ID
    productDetails: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["product"],
    }),

    // Add a new product
    addProduct: builder.mutation({
      query: (data) => {
        return {
          url: "/products/create-product",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),

    // Delete an existing product by ID
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),

    // Update an existing product by ID
    updateProduct: builder.mutation<TUpdateProduct, Partial<TUpdateProduct>>({
      query: (options) => {
        return {
          url: `/products/${options._id}`,
          method: "PUT",
          body: options,
        };
      },
      invalidatesTags: ["product"],
    }),

    // Create a new order
    addOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/orders/create-order",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["order", "product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useProductDetailsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddOrderMutation,
} = baseApi;
