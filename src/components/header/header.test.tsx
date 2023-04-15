import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import Header from './header';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {NameSpace} from '../../const';
import {Provider} from 'react-redux';
import {currentCatalogPagePath} from '../../types/ui';
import {product, products, reviews, productsCart} from '../../mocks/mocks';

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

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
