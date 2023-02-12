import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Routes, Route} from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import HistoryRouter from '../history-route/history-route';
import Basket from './basket';

const history = createMemoryHistory();

describe('Component: Basket', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <Basket/>
      </HistoryRouter>
    );

    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', async () => {
    history.push('/fake');

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route
            path="/"
            element={<h1>This is main page</h1>}
          />
          <Route
            path='*'
            element={
              <Basket/>
            }
          />
        </Routes>
      </HistoryRouter>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
