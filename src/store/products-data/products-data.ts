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
  sendCouponAction
} from '../api-action';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Product, ProductCart} from '../../types/product';
import {checkAddProductsCart,
  checkDeleteProductsCart,
  checkCountProductCart
} from '../../utils';

const initialState: ProductsData = {
  products: [],
  productsCart: [],
  minPrice: null,
  maxPrice: null,
  productsTotalCount: 0,
  discount: null,
  isCatalogPage: false,
  isDataLoading: false,
  isSuccess: false,
  isCouponValid: undefined,
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
    },
    addCurrentProductCart: (state, action: PayloadAction<Product>) => {
      state.currentProductCart = action.payload;
    },
    addProductCart: (state, action: PayloadAction<Product>) => {
      state.productsCart = checkAddProductsCart(state.productsCart, action.payload);
    },
    deleteProductCart: (state, action: PayloadAction<Product>) => {
      state.productsCart = checkDeleteProductsCart(state.productsCart, action.payload);
    },
    changeCountProductCart: (state, action: PayloadAction<ProductCart>) => {
      state.productsCart = checkCountProductCart(state.productsCart, action.payload);
    },
    addCoupon: (state, action: PayloadAction<string>) => {
      state.coupon = action.payload;
    },
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
      })
      .addCase(sendCouponAction.fulfilled, (state, action) => {
        state.discount = action.payload;
        state.isCouponValid = true;
        state.isDataLoading = false;
        state.isSuccess = true;
      })
      .addCase(sendCouponAction.rejected, (state) => {
        state.isCouponValid = false;
        state.discount = null;
        state.isDataLoading = false;
        state.isSuccess = false;
      });
  }
});

export const {cleanUpProductDetail,
  cleanUpProductsSearch,
  setIsNotCatalogPage,
  addCurrentProductCart,
  addProductCart,
  deleteProductCart,
  changeCountProductCart,
  addCoupon
} = productsData.actions;
