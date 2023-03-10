import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import {Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Logo from './logo';
import {LogoType} from '../../const';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {NameSpace} from '../../const';
import {currentCatalogPagePath} from '../../types/ui';
import {Provider} from 'react-redux';

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
});

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Logo typeComponent = {LogoType.Header}/>
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
              path="/catalog/page_1/"
              element={<h1>This is main page</h1>}
            />
            <Route
              path='*'
              element={
                <Logo typeComponent = {LogoType.Header}/>
              }
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
