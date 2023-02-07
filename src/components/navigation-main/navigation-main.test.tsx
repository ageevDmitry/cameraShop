import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../pages/history-route/history-route';
import NavigationMain from './navigation-main';

const history = createMemoryHistory();

describe('Component: NavigationMain', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <NavigationMain/>
      </HistoryRouter>
    );

    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });
});
