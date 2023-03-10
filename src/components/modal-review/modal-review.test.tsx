import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import ModalReview from './modal-review';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Provider} from 'react-redux';
import {NameSpace} from '../../const';
import {product} from '../../mocks/mocks';
import userEvent from '@testing-library/user-event';
import {currentCatalogPagePath} from '../../types/ui';

const mockStore = configureMockStore();

const store = mockStore({
  [NameSpace.ProductsUI]: {
    currentCatalogPagePath: {} as currentCatalogPagePath,
    currentMinPrice: null,
    currentMaxPrice: null,
  },
  [NameSpace.ProductsData]: {
    products: [],
    productDetail: product,
    isDataLoading: false,
    isSuccess: false,
  },
});

describe('Component: Modal-review', () => {

  const setStateModalReview = jest.fn();
  const setStateModalReviewSuccess = jest.fn();

  it('should render correctly', async () => {
    const history = createMemoryHistory();
    history.push('/product/1');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ModalReview
            onClickCloseModalReview={setStateModalReview}
            onClickOpenModalReviewSuccess={setStateModalReviewSuccess}
          />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/Оставить отзыв/i)).toBeInTheDocument();
    expect(screen.getByText(/Ваше имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Достоинства/i)).toBeInTheDocument();
    expect(screen.getByText(/Недостатки/i)).toBeInTheDocument();
    expect(screen.getByText(/Комментарий/i)).toBeInTheDocument();
    expect(screen.getByText(/Отправить отзыв/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('userName'), 'Валера Пшонкин');
    await userEvent.type(screen.getByTestId('advantage'), 'Железная');
    await userEvent.type(screen.getByTestId('disadvantage'), 'Зеленая');
    await userEvent.type(screen.getByTestId('disadvantage'), 'Не пожалел');

    expect(screen.getByDisplayValue(/Валера Пшонкин/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Железная/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Зеленая/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/Не пожалел/i)).toBeInTheDocument();
  });
});
