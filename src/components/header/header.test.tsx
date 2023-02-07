import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import Header from './header';

const history = createMemoryHistory();

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Header/>
      </HistoryRouter>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
