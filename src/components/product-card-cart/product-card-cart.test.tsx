import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ProductCardCart from './product-card-cart';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {NameSpace} from '../../const';
import {Provider} from 'react-redux';
import {product, products, reviews, productsCart, productCart} from '../../mocks/mocks';
import {currentCatalogPagePath} from '../../types/ui';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
State,
Action<string>,
ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  [NameSpace.ProductsUI]: {
    currentCatalogPagePath: {} as currentCatalogPagePath,
    currentMinPrice: null,
    currentMaxPrice: null,
  },
  [NameSpace.ProductsData]: {
    productDetail: product,
    productsSimilar: products,
    productsCart: productsCart,
    reviews: reviews,
    isDataLoading: false,
    isSuccess: false,
  },
});

const history = createMemoryHistory();

describe('Component: ProductCardCart', () => {

  const setIsModalRemoveCart = jest.fn();
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductCardCart
            product={productCart}
            setIsModalRemoveCart={setIsModalRemoveCart}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('product-card-cart')).toBeInTheDocument();
  });
});
