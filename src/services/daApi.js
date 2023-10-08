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
  }),
});

export const { useGetCategoriesQuery, useGetProductsQuery } = daApi;
