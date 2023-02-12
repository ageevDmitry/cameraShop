import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import Search from './search';

const history = createMemoryHistory();

describe('Component: Search', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Search/>
      </HistoryRouter>
    );

    expect(screen.getByText(/Cannonball Pro MX 8i/i)).toBeInTheDocument();
  });
});
