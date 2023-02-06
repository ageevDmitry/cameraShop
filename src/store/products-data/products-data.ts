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
      .addCase(fetchProductsAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.products = [];
        state.isDataLoading = false;
        state.isSuccess = false;
      })
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isSuccess = false;
      })
      .addCase(fetchProductDetailAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchProductDetailAction.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchProductDetailAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isSuccess = false;
      })
      .addCase(fetchProductsSimilarAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchProductsSimilarAction.fulfilled, (state, action) => {
        state.productsSimilar = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchProductsSimilarAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isSuccess = false;
      })
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isDataLoading = false;
        state.isSuccess = false;
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
