import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import NavigationFooter from './navigation-footer';

const history = createMemoryHistory();

describe('Component: NavigationFooter', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <NavigationFooter/>
      </HistoryRouter>
    );

    expect(screen.getByText(/Навигация/i)).toBeInTheDocument();
    expect(screen.getByText(/Ресурсы/i)).toBeInTheDocument();
    expect(screen.getByText(/Поддержка/i)).toBeInTheDocument();
  });
});
