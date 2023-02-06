import {productsData, cleanUpProductDetail} from './products-data';
import {products, product, promo, reviews} from '../../mocks/mocks';
import {fetchProductsAction,
  fetchPromoAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchReviewsAction,
  sendNewReviewAction} from '../api-action';

describe('Reducer:productsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should cleanup productDetail', () => {
    const state = {
      products: [],
      isDataLoading: false,
      isSuccess: false,
      productDetail: product,
    };

    expect(productsData.reducer(state, cleanUpProductDetail()))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
        productDetail: undefined,
      });
  });

  it('should fetch products', () => {
    const state = {
      products: [],
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductsAction.pending.type }))
      .toEqual({
        products: [],
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductsAction.fulfilled.type, payload: products}))
      .toEqual({
        products: products,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductsAction.rejected.type, payload: products}))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch promo', () => {
    const state = {
      products: [],
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchPromoAction.pending.type }))
      .toEqual({
        products: [],
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: promo}))
      .toEqual({
        products: [],
        promo: promo,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchPromoAction.rejected.type}))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch productDetail', () => {
    const state = {
      products: [],
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductDetailAction.pending.type }))
      .toEqual({
        products: [],
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductDetailAction.fulfilled.type, payload: product}))
      .toEqual({
        products: [],
        productDetail: product,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductDetailAction.rejected.type}))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch productSimilar', () => {
    const state = {
      products: [],
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.pending.type }))
      .toEqual({
        products: [],
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.fulfilled.type, payload: products}))
      .toEqual({
        products: [],
        productsSimilar: products,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.rejected.type}))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch reviews', () => {
    const state = {
      products: [],
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchReviewsAction.pending.type }))
      .toEqual({
        products: [],
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
      .toEqual({
        products: [],
        reviews: reviews,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchReviewsAction.rejected.type}))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should send new review', () => {
    const state = {
      products: [],
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: sendNewReviewAction.pending.type }))
      .toEqual({
        products: [],
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: sendNewReviewAction.fulfilled.type}))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: sendNewReviewAction.rejected.type}))
      .toEqual({
        products: [],
        isDataLoading: false,
        isSuccess: false,
      });
  });
});

