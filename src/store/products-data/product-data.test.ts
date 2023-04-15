import {productsData,
  cleanUpProductDetail,
  cleanUpProductsSearch,
  setIsNotCatalogPage,
  addCurrentProductCart,
  addProductCart,
  deleteProductCart,
  changeCountProductCart,
  addCoupon,
  cleanUpIsOrderPost
} from './products-data';
import {
  products,
  product,
  productsReturnedData,
  promo,
  reviews,
  productCart,
  productsCart,
} from '../../mocks/mocks';
import {
  fetchProductsAction,
  fetchMinPriceProductsAction,
  fetchMaxPriceProductsAction,
  fetchPromoAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchProductsSearchAction,
  fetchReviewsAction,
  sendNewReviewAction,
  sendCouponAction,
  sendOrdersAction
} from '../api-action';

describe('Reducer:productsData', () => {
  it('without additional parameters should return initial state', () => {
    expect(productsData.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
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
        isOrderPost: undefined,
      });
  });

  it('should cleanup productDetail', () => {
    const state = {
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
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, cleanUpProductDetail()))
      .toEqual({
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
        isOrderPost: undefined,
        productDetail: undefined,
      });
  });

  it('should cleanup productSearch', () => {
    const state = {
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
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, cleanUpProductsSearch()))
      .toEqual({
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
        isOrderPost: undefined,
        productsSearch: undefined,
      });
  });

  it('should set isNotCatalogPage', () => {
    const state = {
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
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, setIsNotCatalogPage()))
      .toEqual({
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
        isOrderPost: undefined,
      });
  });

  it('should set currentProductCart', () => {
    const state = {
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
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, addCurrentProductCart(product)))
      .toEqual({
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
        isOrderPost: undefined,
        currentProductCart: product
      });
  });

  it('should set productCart', () => {
    const state = {
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
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, addProductCart(product)))
      .toEqual({
        products: [],
        productsCart: productsCart,
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        discount: null,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        isCouponValid: undefined,
        isOrderPost: undefined,
      });
  });

  it('should delete productCart', () => {
    const state = {
      products: [],
      productsCart: productsCart,
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      discount: null,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, deleteProductCart(product)))
      .toEqual({
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
        isOrderPost: undefined,
      });
  });

  it('should change productCart', () => {
    const state = {
      products: [],
      productsCart: productsCart,
      minPrice: null,
      maxPrice: null,
      productsTotalCount: 0,
      discount: null,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, changeCountProductCart(productCart)))
      .toEqual({
        products: [],
        productsCart: productsCart,
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        discount: null,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        isCouponValid: undefined,
        isOrderPost: undefined,
      });
  });

  it('should set coupon', () => {
    const state = {
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
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, addCoupon('camera-555')))
      .toEqual({
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
        isOrderPost: undefined,
        coupon: 'camera-555',
      });
  });

  it('should cleanup isOrderPost', () => {
    const state = {
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
      isOrderPost: true,
    };

    expect(productsData.reducer(state, cleanUpIsOrderPost()))
      .toEqual({
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
        isOrderPost: undefined,
        productsSearch: undefined,
      });
  });

  it('should fetch products', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      productsTotalCount: productsReturnedData.dataTotalCount,
      discount: null,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, {type: fetchProductsAction.pending.type }))
      .toEqual({
        products: [],
        productsCart: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: productsReturnedData.dataTotalCount,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should fetch minPriceProducts', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, {type: fetchMinPriceProductsAction.pending.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: fetchMinPriceProductsAction.fulfilled.type, payload: product.price}))
      .toEqual({
        products: [],
        minPrice: product.price,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: true,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: fetchMinPriceProductsAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should fetch maxPriceProducts', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, {type: fetchMaxPriceProductsAction.pending.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: true,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: fetchMaxPriceProductsAction.fulfilled.type, payload: product.price}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: product.price,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: true,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: fetchMaxPriceProductsAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should fetch promo', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should fetch productDetail', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should fetch productSimilar', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should fetch productsSearch', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, {type: fetchProductsSearchAction.fulfilled.type, payload: products}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        productsSearch: products,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: true,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: fetchProductsAction.rejected.type, payload: products}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should fetch reviews', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should send new review', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
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
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should send coupon', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, {type: sendCouponAction.fulfilled.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: true,
        discount: undefined,
        isCouponValid: true,
        isOrderPost: undefined,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: sendCouponAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        discount: null,
        isCouponValid: false,
        isOrderPost: undefined,
        productsCart: [],
      });
  });

  it('should send orders', () => {
    const state = {
      products: [],
      productsCart: [],
      minPrice: null,
      maxPrice: null,
      discount: null,
      productsTotalCount: 0,
      isCatalogPage: false,
      isDataLoading: false,
      isSuccess: false,
      isCouponValid: undefined,
      isOrderPost: undefined,
    };

    expect(productsData.reducer(state, {type: sendOrdersAction.pending.type }))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: undefined,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: sendOrdersAction.fulfilled.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: true,
        productsCart: [],
      });

    expect(productsData.reducer(state, {type: sendOrdersAction.rejected.type}))
      .toEqual({
        products: [],
        minPrice: null,
        maxPrice: null,
        productsTotalCount: 0,
        isCatalogPage: false,
        isDataLoading: false,
        isSuccess: false,
        discount: null,
        isCouponValid: undefined,
        isOrderPost: false,
        productsCart: [],
      });
  });
});

