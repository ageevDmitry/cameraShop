import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ReviewBlock from './review-block';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {NameSpace} from '../../const';
import {Provider} from 'react-redux';
import {product, products, reviews} from '../../mocks/mocks';

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

const setStateModalReview = jest.fn();

describe('Component: ReviewBlock', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewBlock
            reviews={reviews}
            onClickOpenModalReview={setStateModalReview}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
    expect(screen.getByText(/Оставить свой отзыв/i)).toBeInTheDocument();
  });
});
