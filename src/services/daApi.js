import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dbUrl } from "../firebse/database";

export const daApi = createApi({
  reducerPath: "daApi",
  baseQuery: fetchBaseQuery({
    baseUrl: dbUrl
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories.json",
    }),
    getProducts: builder.query({
      query: () => "products.json",
    }),

    // ACCESO A LA IMAGEN EN LA BD
    getImage: builder.query({
      query: () => "image.json",
    }),

    // ENVIA LA IMAGEN A LA BD
    putImage: builder.mutation({
      query: (image) => ({
        url: "image.json",
        method: "PUT",
        body: image,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery, useGetImageQuery, usePutImageMutation } = daApi;
