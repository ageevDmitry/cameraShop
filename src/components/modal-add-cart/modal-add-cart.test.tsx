import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import ModalAddCart from './modal-add-cart';
import {NameSpace} from '../../const';
import {products, promo, productsCart, product} from '../../mocks/mocks';
import {State} from '../../types/state';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {createAPI} from '../../services/api';
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
    products: products,
    promo: promo,
    isDataLoading: false,
    isSuccess: false,
    productsCart: productsCart,
  },
  [NameSpace.ProductsUI]: {
    currentCatalogPagePath: {} as currentCatalogPagePath,
    currentMinPrice: null,
    currentMaxPrice: null,
  },
});

const history = createMemoryHistory();
describe('Component: ModalAddCart', () => {

  const setIsModalAddCart = jest.fn();
  const setIsModalAddCartSuccess = jest.fn();
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ModalAddCart
            product={product}
            setIsModalAddCart={setIsModalAddCart}
            setIsModalAddCartSuccess={setIsModalAddCartSuccess}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('modalAddCart')).toBeInTheDocument();
  });
});
