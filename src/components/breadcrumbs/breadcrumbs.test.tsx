import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../history-route/history-route';
import Breadcrumbs from './breadcrumbs';
import {NAV_BREADCRUMB_MAIN} from '../../const';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../../types/state';
import {Action} from 'redux';
import {currentCatalogPagePath} from '../../types/ui';
import {Provider} from 'react-redux';
import {NameSpace} from '../../const';

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

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Breadcrumbs
            navBreadcrumbsMain={[NAV_BREADCRUMB_MAIN]}
            currentBreadCrumb={'Каталог'}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(NAV_BREADCRUMB_MAIN.title)).toBeInTheDocument();
    expect(screen.getByText(/Каталог/i)).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path="catalog/page_1"
              element={<h1>This is main page</h1>}
            />
            <Route
              path='*'
              element={
                <Breadcrumbs
                  navBreadcrumbsMain={[NAV_BREADCRUMB_MAIN]}
                  currentBreadCrumb={'Каталог'}
                />
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
