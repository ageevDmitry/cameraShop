import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {fetchProductsAction,
  fetchPromoAction,
  fetchProductDetailAction,
  fetchProductsSimilarAction,
  fetchReviewsAction,
  sendNewReviewAction} from './api-action';
import {APIRoute} from '../const';
import {State} from '../types/state';
import {product, products, promo, reviews, reviewPost, productsReturnedData, productRange} from '../mocks/mocks';

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
      .onGet(`${APIRoute.Products}?_start=${productRange.startItem}&_end=${productRange.endItem}`)
      .reply(200, mockProducts, {
        'x-total-count': 10
      });

    const store = mockStore();

    await store.dispatch(fetchProductsAction(productRange));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchProductsAction.pending.type,
      fetchProductsAction.fulfilled.type
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
      .onGet(`${APIRoute.Products}/${id}`)
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
});
