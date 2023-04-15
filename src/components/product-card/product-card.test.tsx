import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../history-route/history-route';
import ProductCard from './product-card';
import {product, products, reviews, productsCart} from '../../mocks/mocks';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Provider} from 'react-redux';
import {currentCatalogPagePath} from '../../types/ui';
const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
State,
Action<string>,
ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  [NameSpace.ProductsData]: {
    productDetail: product,
    productsSimilar: products,
    productsCart: productsCart,
    reviews: reviews,
    isDataLoading: false,
    isSuccess: false,
  },
  [NameSpace.ProductsUI]: {
    currentCatalogPagePath: {} as currentCatalogPagePath,
    currentMinPrice: null,
    currentMaxPrice: null,
  },
});

const history = createMemoryHistory();

describe('Component: ProductCard', () => {

  const setIsModalAddCart = jest.fn();
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductCard
            product={product}
            setIsModalAddCart={setIsModalAddCart}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
  });

  it('should redirect to root url ProductInfo when user clicked to link', async () => {
    history.push('/fake');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={`/product/${product.id}`}
              element={<h1>This is product page</h1>}
            />
            <Route
              path='*'
              element={
                <ProductCard
                  product={product}
                  setIsModalAddCart={setIsModalAddCart}
                />
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.queryByText(/This is product page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId('productInfo'));

    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
  });

  it('should redirect to root url ProductCart when user clicked to link', async () => {
    history.push('/fake');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={'/cart'}
              element={<h1>This is product page</h1>}
            />
            <Route
              path='*'
              element={
                <ProductCard
                  product={product}
                  setIsModalAddCart={setIsModalAddCart}
                />
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.queryByText(/This is product page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByTestId('cart'));

    expect(screen.getByText(/This is product page/i)).toBeInTheDocument();
  });
});
