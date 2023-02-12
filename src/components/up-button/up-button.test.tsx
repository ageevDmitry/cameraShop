import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import UpButton from './up-button';

const history = createMemoryHistory();

describe('Component: UpButton', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <UpButton/>
      </HistoryRouter>
    );

    expect(screen.getByTestId('up-btn')).toBeInTheDocument();
  });
});
