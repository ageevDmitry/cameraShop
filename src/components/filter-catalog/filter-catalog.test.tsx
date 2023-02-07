import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import FilterCatalog from './filter-catalog';

const history = createMemoryHistory();

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <FilterCatalog/>
      </HistoryRouter>
    );

    expect(screen.getByText(/Категория/i)).toBeInTheDocument();
    expect(screen.getByText(/Тип камеры/i)).toBeInTheDocument();
    expect(screen.getByText(/Уровень/i)).toBeInTheDocument();
    expect(screen.getByText(/Сбросить фильтры/i)).toBeInTheDocument();
  });
});
