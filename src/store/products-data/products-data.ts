import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ProductsData} from '../../types/state';
import {fetchProductsAction,
  fetchMinPriceProductsAction,
  fetchMaxPriceProductsAction,
  fetchPromoAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchProductsSearchAction,
  fetchReviewsAction,
  sendNewReviewAction,
} from '../api-action';

const initialState: ProductsData = {
  products: [],
  minPrice: null,
  maxPrice: null,
  productsTotalCount: 0,
  isCatalogPage: false,
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
    cleanUpProductsSearch: (state) => {
      state.productsSearch = undefined;
    },
    setIsNotCatalogPage: (state) => {
      state.isCatalogPage = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload.data;
        state.productsTotalCount = action.payload.dataTotalCount;
        state.isDataLoading = false;
        state.isCatalogPage = true;
        state.isSuccess = true;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.products = [];
        state.isDataLoading = false;
        state.isSuccess = false;
      })
      .addCase(fetchMinPriceProductsAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchMinPriceProductsAction.fulfilled, (state, action) => {
        state.minPrice = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchMinPriceProductsAction.rejected, (state) => {
        state.minPrice = null;
        state.isDataLoading = false;
        state.isSuccess = false;
      })
      .addCase(fetchMaxPriceProductsAction.pending, (state) => {
        state.isDataLoading = true;
        state.isSuccess = false;
      })
      .addCase(fetchMaxPriceProductsAction.fulfilled, (state, action) => {
        state.maxPrice = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchMaxPriceProductsAction.rejected, (state) => {
        state.maxPrice = null;
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
        state.reviews = action.payload.reviews;
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
      .addCase(fetchProductsSearchAction.fulfilled, (state, action) => {
        state.productsSearch = action.payload;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(fetchProductsSearchAction.rejected, (state) => {
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

export const {cleanUpProductDetail, cleanUpProductsSearch, setIsNotCatalogPage} = productsData.actions;
