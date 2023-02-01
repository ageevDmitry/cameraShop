import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ProductsData} from '../../types/state';
import {fetchProductsAction,
  fetchPromoAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchReviewsAction,
} from '../api-action';

const initialState: ProductsData = {
  products: [],
};

export const productsData = createSlice({
  name: NameSpace.ProductsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.products = [];
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })
      .addCase(fetchProductDetailAction.fulfilled, (state, action) => {
        state.productDetail = action.payload;
      })
      .addCase(fetchProductsSimilarAction.fulfilled, (state, action) => {
        state.productsSimilar = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
