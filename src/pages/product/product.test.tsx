import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import {Provider} from 'react-redux';
import Product from './product';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {NameSpace} from '../../const';
import {product, products, reviews} from '../../mocks/mocks';
import userEvent from '@testing-library/user-event';

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
    reviews: reviews,
    isDataLoading: false,
    isSuccess: false,
  },
});

const history = createMemoryHistory();
describe('Component: Product', () => {

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Product/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
    expect(screen.getByText(/Оставить свой отзыв/i)).toBeInTheDocument();
    expect(screen.getByText(/Показать больше отзывов/i)).toBeInTheDocument();
  });

  it('should open ModalReview and ModalReviewSuccess', async () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Product/>
        </HistoryRouter>
      </Provider>
    );

    await userEvent.click(screen.getByTestId('modalReview'));

    expect(screen.getByText(/Оставить отзыв/i)).toBeInTheDocument();
  });
});
