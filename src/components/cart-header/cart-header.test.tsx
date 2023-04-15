import {render, screen} from '@testing-library/react';
import {Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../history-route/history-route';
import CartHeader from './cart-header';
import {Provider} from 'react-redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {NameSpace} from '../../const';
import {products, promo, productsCart} from '../../mocks/mocks';
import {createMemoryHistory} from 'history';
import {createAPI} from '../../services/api';


const history = createMemoryHistory();

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
State,
Action<string>,
ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  [NameSpace.ProductsData]: {
    products: products,
    productsCart: productsCart,
    promo: promo,
    isDataLoading: false,
    isSuccess: false,
  },
});

describe('Component: CartHeader', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CartHeader/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="/cart"
              element={<h1>This is main page</h1>}
            />
            <Route
              path='*'
              element={
                <CartHeader/>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
