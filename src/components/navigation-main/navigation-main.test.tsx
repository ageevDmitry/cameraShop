import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import NavigationMain from './navigation-main';
import {Provider} from 'react-redux';
import {State} from '../../types/state';
import {createAPI} from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {Action} from 'redux';
import {NameSpace} from '../../const';
import {currentCatalogPagePath} from '../../types/ui';

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

describe('Component: NavigationMain', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <NavigationMain/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });
});
