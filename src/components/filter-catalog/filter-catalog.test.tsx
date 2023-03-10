import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import FilterCatalog from './filter-catalog';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {NameSpace} from '../../const';
import {currentCatalogPagePath} from '../../types/ui';
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
  [NameSpace.ProductsUI]: {
    currentCatalogPagePath: {} as currentCatalogPagePath,
    currentMinPrice: null,
    currentMaxPrice: null,
  },
  [NameSpace.ProductsData]: {
    productDetail: product,
    productsSimilar: products,
    reviews: reviews,
    isDataLoading: false,
    isSuccess: false,
  },
});

const history = createMemoryHistory();

describe('Component: FilterCatalog', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FilterCatalog/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Категория/i)).toBeInTheDocument();
    expect(screen.getByText(/Тип камеры/i)).toBeInTheDocument();
    expect(screen.getByText(/Уровень/i)).toBeInTheDocument();
    expect(screen.getByText(/Сбросить фильтры/i)).toBeInTheDocument();
  });
});
