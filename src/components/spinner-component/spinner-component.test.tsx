import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import SpinnerComponent from './spinner-component';

const history = createMemoryHistory();

describe('Component: SpinnerPage', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <SpinnerComponent/>
      </HistoryRouter>
    );

    expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
  });
});
