import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import Pagination from './pagination';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore();

const history = createMemoryHistory();
describe('Component: Pagination', () => {

  const paginationCount = 5;
  const currentCatalogPage = 1;

  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Pagination
            paginationCount={paginationCount}
            currentCatalogPage={currentCatalogPage}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/1/i)).toBeInTheDocument();
  });
});
