import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import SortCatalog from './sort-catalog';

const history = createMemoryHistory();

describe('Component: SortCatalog', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <SortCatalog/>
      </HistoryRouter>
    );

    expect(screen.getByText(/Сортировать:/i)).toBeInTheDocument();
  });
});
