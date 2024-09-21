import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TProduct, TResponseRedux, TUpdateProduct } from "../../types";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://campers-shop-server-two.vercel.app/api",
  }),
  tagTypes: ["product", "order"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params) => {
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
        };
      },
    }),
    // get Product Details
    productDetails: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["product"],
    }),
    // get Featured Products
    featuredProducts: builder.query({
      query: () => {
        return {
          url: "/products/featuredProducts",
          method: "GET",
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
        };
      },
    }),

    // addProduct
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
    // delete product
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),

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

    // create order
    addOrder: builder.mutation({
      query: (data) => {
        return {
          url: "/orders/create-order",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useProductDetailsQuery,
  useFeaturedProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddOrderMutation,
} = baseApi;
