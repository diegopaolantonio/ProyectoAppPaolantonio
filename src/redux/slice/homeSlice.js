import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../data/products";
import { categories } from "../../data/categories";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    allCategories: categories,
    allProducts: products,
    categorySelected: "",
    productSelected: [],
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;

      if (state.categorySelected != "" && state.categorySelected != "all") {
        state.productsFilter = state.allProducts.filter(
          (element) => element.category === state.categorySelected
        );
      } else {
        state.productsFilter = state.allProducts;
      }
    },
    setProductSelected: (state, action) => {
      state.productSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setProductSelected } = homeSlice.actions;

export default homeSlice.reducer;
