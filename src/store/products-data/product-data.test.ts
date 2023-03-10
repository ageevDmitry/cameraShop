import {productsData,
  cleanUpProductDetail
} from './products-data';
import {
  products, product, productsReturnedData, promo, reviews
} from '../../mocks/mocks';
import {
  fetchProductsAction,
  fetchPromoAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchReviewsAction,
  sendNewReviewAction
} from '../api-action';

describe('Reducer:productsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should cleanup productDetail', () => {
    const state = {
      products: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, cleanUpProductDetail()))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        productDetail: undefined,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch products', () => {
    const state = {
      products: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: productsReturnedData.dataTotalCount,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductsAction.pending.type }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: productsReturnedData.dataTotalCount,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductsAction.fulfilled.type, payload: productsReturnedData}))
      .toEqual({
        products: productsReturnedData.data,
        minPrice: null,
        maxPrice: null,
        productsTotalCount: productsReturnedData.dataTotalCount,
        isCatalogPage: true,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductsAction.rejected.type, payload: productsReturnedData}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: productsReturnedData.dataTotalCount,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch promo', () => {
    const state = {
      products: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchPromoAction.pending.type }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isDataLoading: true,
        isCatalogPage: false,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: promo}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        promo: promo,
        isDataLoading: false,
        isCatalogPage: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchPromoAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isDataLoading: false,
        isCatalogPage: false,
        isSuccess: false,
      });
  });

  it('should fetch productDetail', () => {
    const state = {
      products: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductDetailAction.pending.type }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductDetailAction.fulfilled.type, payload: product}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        reviews: reviews,
        productsTotalCount: 0,
        isCatalogPage: false,
        productDetail: product,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductDetailAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch productSimilar', () => {
    const state = {
      products: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.pending.type }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.fulfilled.type, payload: products}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        productsSimilar: products,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch reviews', () => {
    const state = {
      products: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchReviewsAction.pending.type }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        reviews: reviews,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchReviewsAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should send new review', () => {
    const state = {
      products: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: sendNewReviewAction.pending.type }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: sendNewReviewAction.fulfilled.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: sendNewReviewAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
      });
  });
});
