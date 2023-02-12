import {productsData, cleanUpProductDetail} from './products-data';
import {products, product, productsReturnedData, promo, reviews} from '../../mocks/mocks';
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
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should cleanup productDetail', () => {
    const state = {
      products: [],
      productsTotalCount: 0,
      isDataLoading: false,
      isSuccess: false,
      productDetail: product,
    };

    expect(productsData.reducer(state, cleanUpProductDetail()))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: false,
        productDetail: undefined,
      });
  });

  it('should fetch products', () => {
    const state = {
      products: [],
      productsTotalCount: productsReturnedData.dataTotalCount,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductsAction.pending.type }))
      .toEqual({
        products: [],
        productsTotalCount: productsReturnedData.dataTotalCount,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductsAction.fulfilled.type, payload: productsReturnedData}))
      .toEqual({
        products: productsReturnedData.data,
        productsTotalCount: productsReturnedData.dataTotalCount,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductsAction.rejected.type, payload: productsReturnedData}))
      .toEqual({
        products: [],
        productsTotalCount: productsReturnedData.dataTotalCount,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch promo', () => {
    const state = {
      products: [],
      productsTotalCount: 0,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchPromoAction.pending.type }))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: promo}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        promo: promo,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchPromoAction.rejected.type}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch productDetail', () => {
    const state = {
      products: [],
      productsTotalCount: 0,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductDetailAction.pending.type }))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductDetailAction.fulfilled.type, payload: product}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        productDetail: product,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductDetailAction.rejected.type}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch productSimilar', () => {
    const state = {
      products: [],
      productsTotalCount: 0,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.pending.type }))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.fulfilled.type, payload: products}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        productsSimilar: products,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchProductsSimilarAction.rejected.type}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should fetch reviews', () => {
    const state = {
      products: [],
      productsTotalCount: 0,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: fetchReviewsAction.pending.type }))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        reviews: reviews,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: fetchReviewsAction.rejected.type}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: false,
      });
  });

  it('should send new review', () => {
    const state = {
      products: [],
      productsTotalCount: 0,
      isDataLoading: false,
      isSuccess: false,
    };

    expect(productsData.reducer(state, {type: sendNewReviewAction.pending.type }))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: true,
        isSuccess: false,
      });

    expect(productsData.reducer(state, {type: sendNewReviewAction.fulfilled.type}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: true,
      });

    expect(productsData.reducer(state, {type: sendNewReviewAction.rejected.type}))
      .toEqual({
        products: [],
        productsTotalCount: 0,
        isDataLoading: false,
        isSuccess: false,
      });
  });
});

