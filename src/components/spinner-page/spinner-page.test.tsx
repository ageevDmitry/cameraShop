import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import SpinnerPage from './spinner-page';

const history = createMemoryHistory();

describe('Component: SpinnerPage', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <SpinnerPage/>
      </HistoryRouter>
    );

    expect(screen.getByTestId('spinner-page')).toBeInTheDocument();
  });
});
