import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import {AppRoute, NameSpace} from '../../const';
import App from './app';
import {State} from '../../types/state';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];

const mockStore = configureMockStore<
State,
Action<string>,
ThunkDispatch<State, typeof api, Action>
>(middlewares);

const store = mockStore({
  [NameSpace.ProductsData]: {
    products: [],
    isDataLoading: false,
    isSuccess: false,
  },
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App/>
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {

  it('should render "Catalog" when user navigate to "catalog/page_#"', () => {
    history.push(AppRoute.Catalog);

    render(fakeApp);

    expect(screen.getByTestId('spinner-page')).toBeInTheDocument();
  });

  it('should render "Product" when user navigate to "product/1"', () => {
    history.push('/product/1');

    render(fakeApp);

    expect(screen.getByTestId('spinner-page')).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Страница Отсутсвует. На главную страницу')).toBeInTheDocument();
  });
});
