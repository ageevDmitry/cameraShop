import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import ProductInfo from './product-info';
import {products, promo, productsCart, product} from '../../mocks/mocks';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {NameSpace} from '../../const';

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

describe('Component: ProductInfo', () => {

  const setIsModalAddCart = jest.fn();
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductInfo
            product={product}
            setIsModalAddCart={setIsModalAddCart}
          />
        </HistoryRouter>
      </Provider>

    );

    expect(screen.getByText(product.name)).toBeInTheDocument();
  });
});
