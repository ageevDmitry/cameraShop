import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {
  fetchProductsAction,
  fetchPromoAction,
  fetchMinPriceProductsAction,
  fetchMaxPriceProductsAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchProductsSearchAction,
  fetchReviewsAction,
  sendNewReviewAction,
  sendCouponAction} from './api-action';
import {APIRoute,
  QueryParam
} from '../const';
import {State} from '../types/state';
import {product,
  products,
  promo,
  reviews,
  reviewPost,
  productsFetchParams,
  productsMinMaxFetchParams,
  coupon,
  orderPost
} from '../mocks/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch Load_Products when GET /cameras', async () => {
    const mockProducts = products;
    mockAPI
      .onGet(APIRoute.Products, {
        params: {
          [QueryParam.StartItem]: productsFetchParams.startItem,
          [QueryParam.EndItem]: productsFetchParams.endItem,
          [QueryParam.Sort]: null,
          [QueryParam.Order]: null,
          [QueryParam.Category]: null,
          [QueryParam.Type]: null,
          [QueryParam.Level]: null,
          [QueryParam.MinPrice]: null,
          [QueryParam.MaxPrice]: null,
        }
      })
      .reply(200, mockProducts, {
        'x-total-count': 10
      });

    const store = mockStore();

    await store.dispatch(fetchProductsAction(productsFetchParams));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchProductsAction.pending.type,
      fetchProductsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_MinPriceProducts when GET /cameras', async () => {
    const mockProducts = products;

    mockAPI
      .onGet(APIRoute.Products, {
        params: {
          [QueryParam.StartItem]: 0,
          [QueryParam.EndItem]: 1,
          [QueryParam.Sort]: 'price',
          [QueryParam.Order]: 'asc',
          [QueryParam.Category]: null,
          [QueryParam.Type]: null,
          [QueryParam.Level]: null,
        }
      })
      .reply(200, mockProducts);

    const store = mockStore();

    await store.dispatch(fetchMinPriceProductsAction(productsMinMaxFetchParams));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchMinPriceProductsAction.pending.type,
      fetchMinPriceProductsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_MaxPriceProducts when GET /cameras', async () => {
    const mockProducts = products;

    mockAPI
      .onGet(APIRoute.Products, {
        params: {
          [QueryParam.StartItem]: 0,
          [QueryParam.EndItem]: 1,
          [QueryParam.Sort]: 'price',
          [QueryParam.Order]: 'desc',
          [QueryParam.Category]: null,
          [QueryParam.Type]: null,
          [QueryParam.Level]: null,
        }
      })
      .reply(200, mockProducts);

    const store = mockStore();

    await store.dispatch(fetchMaxPriceProductsAction(productsMinMaxFetchParams));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchMaxPriceProductsAction.pending.type,
      fetchMaxPriceProductsAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_Promo when GET /promo', async () => {
    const mockPromo = promo;
    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, mockPromo);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_ProductDetail when GET /cameras/:id', async () => {
    const mockProduct = product;
    const id = '1';

    mockAPI
      .onGet(`${APIRoute.Products}/${id}?_embed=reviews`)
      .reply(200, mockProduct);

    const store = mockStore();

    await store.dispatch(fetchProductDetailAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchProductDetailAction.pending.type,
      fetchProductDetailAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_ProductsSimilar when GET /cameras/:id/similar', async () => {
    const mockProducts = products;
    const id = '1';

    mockAPI
      .onGet(`${APIRoute.Products}/${id}/similar`)
      .reply(200, mockProducts);

    const store = mockStore();

    await store.dispatch(fetchProductsSimilarAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchProductsSimilarAction.pending.type,
      fetchProductsSimilarAction.fulfilled.type
    ]);
  });

  it('should dispatch Load_SearchProducts when GET /cameras', async () => {
    const mockProducts = products;

    mockAPI
      .onGet(APIRoute.Products, {
        params: {
          [QueryParam.NameLike]: 'Pro',
        }
      })
      .reply(200, mockProducts);

    const store = mockStore();

    await store.dispatch(fetchProductsSearchAction('Pro'));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchProductsSearchAction.pending.type,
      fetchProductsSearchAction.fulfilled.type
    ]);
  });


  it('should dispatch Load_Reviews when GET /cameras/:id/reviews', async () => {
    const mockReviews = reviews;
    const id = '1';

    mockAPI
      .onGet(`${APIRoute.Products}/${id}/reviews`)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(id));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch Post_Reviews when Post /reviews', async () => {
    const mockReviews = reviewPost;

    mockAPI
      .onPost(APIRoute.Reviews)
      .reply(200, mockReviews);

    const store = mockStore();

    await store.dispatch(sendNewReviewAction(mockReviews));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      sendNewReviewAction.pending.type,
      fetchReviewsAction.pending.type,
      sendNewReviewAction.fulfilled.type
    ]);
  });

  it('should dispatch Post_Coupon when Post /coupons', async () => {
    const mockCoupon = coupon;
    const discount = 15;

    mockAPI
      .onPost(APIRoute.Coupons)
      .reply(200, discount);

    const store = mockStore();

    await store.dispatch(sendCouponAction(mockCoupon));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      sendCouponAction.pending.type,
      sendCouponAction.fulfilled.type
    ]);
  });

  it('should dispatch Post_Orders when Post /orders', async () => {
    const mockOrders = orderPost;

    mockAPI
      .onPost(APIRoute.Orders)
      .reply(200);

    const store = mockStore();

    await store.dispatch(sendCouponAction(mockOrders));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      sendCouponAction.pending.type,
      sendCouponAction.fulfilled.type
    ]);
  });
});
