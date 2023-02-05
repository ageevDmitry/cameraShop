import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ProductsData} from '../../types/state';
import {fetchProductsAction,
  fetchPromoAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchReviewsAction,
  sendNewReviewAction,
} from '../api-action';

const initialState: ProductsData = {
  products: [],
  isDataLoading: false,
  isSuccess: false,
};

export const productsData = createSlice({
  name: NameSpace.ProductsData,
  initialState,
  reducers: {
    cleanUpProductDetail: (state) => {
      state.productDetail = undefined;
    },
  },
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
      })
      .addCase(sendNewReviewAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;

      })
      .addCase(sendNewReviewAction.fulfilled, (state) => {
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(sendNewReviewAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isSuccess = false;
      });
  }
});

export const {cleanUpProductDetail} = productsData.actions;
