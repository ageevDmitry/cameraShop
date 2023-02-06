import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-route/history-route';
import NotFoundScreen from './not-found-screen';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <HelmetProvider>
          <NotFoundScreen/>
        </HelmetProvider>
      </HistoryRouter>,
    );

    const linkElement = screen.getByText('404. Страница Отсутсвует. На главную страницу');

    expect(linkElement).toBeInTheDocument();
  });
});
